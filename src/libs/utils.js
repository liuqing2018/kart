/**
 * Created by tudou on 2020/4/10 18:40.
 */
import { message as Message } from 'ant-design-vue';

// 判断value是否为空
const isEmpty = (value) => value === '' || value === null || value === undefined;

// 存储数据到本地
const getLocal = (key) => {
  if (localStorage[key] && localStorage[key] !== null) {
    return JSON.parse(localStorage[key]);
  }
  return '';
};

// 获取本地存储的数据
const setLocal = function setLocal(key, data) {
  if (isEmpty(data)) {
    return;
  }
  localStorage[key] = JSON.stringify(data);
};

// 统一处理错误信息
const handleError = (errorInfo) => {
  const {
    name, type, message, filename, colno, lineno, error,
  } = errorInfo;

  const errorTypes = [
    'EvalError',
    'InternalError',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
  ];
  const httpStatusList = {
    400: '错误的请求',
    401: '权限不足',
    403: '拒绝访问',
    404: '服务器找不到请求的资源',
    413: '请求实体过大',
    414: '请求的URI过长',
    415: '不支持的媒体类型',
    500: '服务器内部错误，请联系管理员解决',
    // 502: '网关错误',
    503: '服务器正忙，请稍后再试',
  };

  const sendLogs = { // 自定义日志信息
    // time: moment().format('YYYY-MM-DD HH:mm:ss'), // 时间
    router: window.location.toString(), // 页面
    // userAgent: window.navigator.userAgent.toString(), // 用户代理信息
    error: '', // 错误信息
    url: '', // 接口
    data: '', // 参数
    from: 'by manual', // 手动上报标识
  };
  let errorMsg = '网络连接失败';
  let isTimeout = false;
  if (name === 'Error') {
    const errorData = errorInfo;
    if (errorData.code === 'ECONNABORTED') {
      errorMsg = '服务器超时，请稍后再试';
      isTimeout = true;
    } else if (errorData.response) {
      errorMsg = httpStatusList[errorData.response.status] || errorMsg;
    } else {
      isTimeout = true;
    }
    if (errorData.config) {
      sendLogs.url = errorData.config.url;
      sendLogs.data = errorData.config.data && errorData.config.data.slice(0, 1500); // 此处截取前1500个字符，避免参数过多无法上报
    }
  } else if (errorTypes.includes(name)) {
    errorMsg = '数据格式有误，请联系管理员解决';
  }
  const allSendLogs = {
    name, type, message, filename, colno, lineno, error, ...sendLogs,
  };
  // console.log('allSendLogs: ');
  // console.log(allSendLogs);
  if (isTimeout) {
    const errorList = JSON.parse(window.localStorage.getItem('localError')) || [];
    if (errorList.length > 10) {
      errorList.pop();
    }
    errorList.unshift(allSendLogs);
    window.localStorage.setItem('localError', JSON.stringify(errorList));
  }
  console.log(errorInfo); // 在控制台输出错误信息
  Message.error(errorMsg);
};

/**
 * 分时执行任务
 * @param data: 分时执行的任务数据 {Array}
 * @param fn: 分时执行的逻辑函数 {Function}
 * @param count: 每次执行的数量 {Number}
 * @param callback: 任务执行完成的回调函数 {Function}
 * @returns {boolean|render}
 */
const timeChunk = (data, fn, count = 10, callback) => {
  if (!data || !fn || !count) {
    return false;
  }

  // 开始执行函数
  function start() {
    for (let i = 0; i < Math.min(count, data.length); i++) {
      fn(data.shift());
    }
  }

  let timer = null;
  return function render(duration = 300) {
    timer = setInterval(() => {
      if (data.length === 0) {
        callback && callback();
        return clearInterval(timer);
      }
      start();
    }, duration);
  };
};

/**
 * 展示小数点后有效数字
 * @param num: 待转换待数据
 * @param precision: 待显示小数位数
 * @param fraction: 默认显示小数位数
 * @returns {string}: xx.00 || xx.xxx
 */
const toFixed = (num, precision = 6, fraction = 2) => {
  if (Number.isNaN(Number(num))) {
    return '';
  }

  num = Number(num);
  let numStr = num.toString();
  const dotIndex = numStr.indexOf('.');
  if (dotIndex === -1) {
    return num.toFixed(fraction);
  }

  numStr = num.toFixed(precision);
  const endIndex = numStr.match(/0*$/).index;
  const decimal = numStr.substring(dotIndex, endIndex); // .xxx
  if (decimal.length === 1) { // 小数部分只有 .
    return Number(numStr.substring(0, dotIndex)).toFixed(fraction);
  }
  return numStr.substring(0, endIndex);
};

export {
  getLocal,
  setLocal,
  isEmpty,
  handleError,
  timeChunk,
  toFixed,
};

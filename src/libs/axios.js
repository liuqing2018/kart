/**
 * Created by tudou on 2020/4/21 22:00.
 */
import axios from 'axios';
import { message } from 'ant-design-vue';
import { baseURL, unableCancelList } from '@/config';
import qs from 'qs';

/*
* 使用formData()可以通过payload提交表单数据:multipart/form-data
post: {
  formdata: application/x-www-form-urlencoded,
  payload: application/json或multipart/form-data
}
*/

const instance = axios.create({
  // 将自动加在请求地址前面
  baseURL,

  // 超时时间（毫秒）, 0 表示无超时时间
  timeout: 30000,

  // 服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // 表示跨域请求时是否需要使用凭证
  withCredentials: true,

  // 默认提交的数据格式为json，postFormData设置为true后可以单独传递formdata格式（调用时候传递）
  postFormData: false,

  // 请求头信息
  headers: {
    'Content-Type': 'application/json'
    // 'token': token
  },

  // 序列化params 自动转换为?name=value
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});

// 取消请求的Handler
let CancelToken = axios.CancelToken;

// 存放所有请求的cancel方法
window.cancelMap = {};

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 默认发送的数据格式是json，此处增加formdata格式
  const formDataType = 'application/x-www-form-urlencoded';
  if (config.postFormData || config.headers['Content-Type'] === formDataType) {
    config.headers['Content-Type'] = formDataType;
    config.data = qs.stringify(config.data);
  }


  // 在请求拦截器中为每一个请求添加cancelToken，并将cancel方法存入cancelMap中保存
  config.cancelToken = new CancelToken((cancel) => {
    // 配置cancel的名称，以便取消
    const cancelKey = config.url;

    // 如果已经请求过了&&不在可以多次请求的名单(unableCancelList)中
    if (window.cancelMap[cancelKey] && !unableCancelList.includes(cancelKey)) {
      window.cancelMap[cancelKey]();
    }
    window.cancelMap[cancelKey] = cancel; // 最终cancelMap的数据为 '/user/list': f()
  });

  return config;
}, (error) => Promise.reject(error));

// 响应拦截器
instance.interceptors.response.use((response) => {
  // 请求响应后，将cancel方法从cancelMap中移除
  const cancelKey = response.config.url;
  if (window.cancelMap[cancelKey]) {
    delete window.cancelMap[cancelKey];
  }

  // 处理响应数据
  if (response.status && response.status === 200 && response.data) {
    return response.data;
  }

  // 登录超时后端返回 80001
  if (response.data.status === 80001) {
    message.error('操作超时，请重新登录！');
    setTimeout(() => {
      this.router.push({
        path: '/',
        query: {
          fromPath: new Date().getTime()
        }
      });
    }, 2000);
  }
  return response;
}, (error) => {
  // 取消请求
  if (axios.isCancel(error)) {
    return new Promise(() => {});
  }

  return Promise.reject(error);
});

// get方法请求的第二个参数也是data
const iAxios = (method, url, data, config) => {
  if (arguments.length === 1) {
    return instance(config);
  }

  let params = null;
  if (method.toLocaleString() === 'get') {
    params = data;
    data = null;
  }

  const options = {
    method,
    url,
    data,
    params,
    ...config,
  };
  return instance(options);
};

// 请求方法的语法糖
const request = {
  get(url, data, config) {
    return iAxios('get', url, data, config);
  },
  post(url, data, config) {
    return iAxios('post', url, data, config);
  },
  request(config) {
    return iAxios(config);
  },
};

export default request;

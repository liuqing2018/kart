/**
 * Created by tudou on 2020/4/21 22:00.
 */
import Axios from 'axios';
import { message } from 'ant-design-vue';
import { baseURL } from '@/libs/config';
import { handleError } from '@/libs/utils';
import qs from 'qs';
import store from '../store/index';

// 可以多次请求的方法列表（默认请求A在没有完成之前，不可以再次发起A请求）
const unableCancelList = [];

// 不产生全局loading的列表
const disableLoadingList = [];

/*
* 使用formData()可以通过payload提交表单数据:multipart/form-data
post: {
  formdata: application/x-www-form-urlencoded,
  payload: application/json或multipart/form-data
}
*/

const instance = Axios.create({
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
const { CancelToken } = Axios;

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

  // 请求路径
  const requestUrl = config.url;

  // 请求路径不在禁用列表（disableLoadingList）&&当前没有设置disableLoading
  if (!disableLoadingList.includes(requestUrl) && !store.state.app.disableLoading) {
    store.commit('setLoading', true);
  }

  // 在请求拦截器中为每一个请求添加cancelToken，并将cancel方法存入cancelMap中保存
  config.cancelToken = new CancelToken((cancel) => {
    // 如果已经请求过了&&不在可以多次请求的名单(unableCancelList)中
    if (window.cancelMap[requestUrl] && !unableCancelList.includes(requestUrl)) {
      // 通过requestUrl取消对应的请求
      window.cancelMap[requestUrl]();
    }
    window.cancelMap[requestUrl] = cancel; // 最终cancelMap的数据为 '/user/list': f()
  });

  return config;
}, (error) => {
  // 捕获错误，结束loading状态
  store.commit('setLoading', false);
  store.commit('setDisableLoading', false);
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use((response) => {
  // 请求响应后，将cancel方法从cancelMap中移除
  const cancelKey = response.config.url;
  if (window.cancelMap[cancelKey]) {
    delete window.cancelMap[cancelKey];
  }

  // 请求结束将全局loading状态设置为false
  store.commit('setLoading', false);
  store.commit('setDisableLoading', false);

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
  store.commit('setLoading', false);

  // 取消请求
  if (Axios.isCancel(error)) {
    return new Promise(() => {});
  }

  return Promise.reject(error);
});

// get方法请求的第二个参数也是data
const iAxios = (method, url, data, config) => {
  return new Promise((resolve) => {
    let requestConfig = null;
    if (arguments.length === 1) {
      requestConfig = config;
    } else {
      let params = null;
      if (method.toLocaleString() === 'get') {
        params = data;
        data = null;
      }

      requestConfig = {
        method,
        url,
        data,
        params,
        ...config,
      };
    }

    instance.request(requestConfig).then((response) => {
      resolve(response);
    }).catch((error) => {
      handleError(error); // 统一处理错误
    });
  });
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

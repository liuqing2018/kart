/**
 * Created by tudou on 2020/4/10 20:39.
 */
// 默认语言的标识 zh_CN中文 en_US英文
const defaultLang = 'zh_CN';

// 默认语言存储在localstorage的key
const localeKey = 'locale';

// 接口请求地址
const devURL = 'http://localhost:8080';
const proURL = '/';
const baseURL = process.env.NODE_ENV === 'development' ? devURL : proURL;

// 上传文件默认限制的大小: 2M
const maxSize = 1024 * 2;

// 可以多次请求的方法列表（默认请求A在没有完成之前，不可以再次发起A请求）
const unableCancelList = [];

// 图表的颜色列表
const colorData = ['#0094da', '#5bc0de', '#e79d47', '#f00', '#5cb85c', '#f4a79d'];

export {
  defaultLang,
  localeKey,
  baseURL,
  maxSize,
  unableCancelList,
  colorData,
};

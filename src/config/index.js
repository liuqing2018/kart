/**
 * Created by tudou on 2020/4/10 20:39.
 */
// 默认语言的标识 zh_CN中文 en_US英文
const defaultLang = 'zh_CN';

// 默认语言存储在localstorage的key
const localeKey = 'locale';

// 用户登录标识
const tokenKey = 'token';

// 接口请求地址
const devURL = 'http://localhost:8080';
const proURL = '/';
const baseURL = process.env.NODE_ENV === 'development' ? devURL : proURL;

// 上传文件默认限制的大小: 2M
const maxSize = 1024 * 2;

// 图表的颜色列表
const colorData = ['#0094da', '#5bc0de', '#e79d47', '#f00', '#5cb85c', '#f4a79d'];

export {
  defaultLang,
  localeKey,
  tokenKey,
  baseURL,
  maxSize,
  colorData,
};

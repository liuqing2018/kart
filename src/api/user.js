/**
 * Created by tudou on 2020/4/25 11:16.
 */
import axios from '@/libs/axios';

const login = (params) => {
  return axios.get('/login.json', params);
  // return axios.get('/user/login', params);
};

const permissionList = (params) => {
  // return axios.get('/user/permission', params);
  return axios.get('/permission.json', params);
};

export {
  login,
  permissionList
};

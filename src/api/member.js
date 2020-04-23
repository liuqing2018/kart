/**
 * Created by tudou on 2020/4/21 22:19.
 */
import axios from '../libs/axios';

const memberList = (data) => {
  return axios.post('/member/list', data);
};

const memberInfo = (data) => {
  return axios.get('/data.json', data);
};

export {
  memberList,
  memberInfo,
};

/**
 * 动态路由：本页面的路由将会根据服务器返回权限，进行动态匹配
 */
import member from './member';
import recharge from './recharge';
import test from './test';

export default [
  ...member,
  ...recharge,
  ...test
];

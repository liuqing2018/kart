/**
 * 动态路由：本页面的路由将会根据服务器返回权限，进行动态匹配
 */
// 会员管理
import member from './member';

// 充值管理
import recharge from './recharge';

export default [
  ...member,
  ...recharge,
];

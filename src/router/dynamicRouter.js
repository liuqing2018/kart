/**
 * 动态路由：本页面的路由将会根据服务器返回权限，进行动态匹配
 */
// 订单管理
import order from './order';

// 充值管理
import recharge from './recharge';

// 会员管理
import member from './member';

// 车辆管理
import vehicle from './vehicle';

// 财务查询
import finance from './finance';

// 系统配置
import system from './system';

export default [
  ...order,
  ...recharge,
  ...member,
  ...vehicle,
  ...finance,
  ...system
];

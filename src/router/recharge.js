/**
 * Created by tudou on 2020/4/28 23:42.
 */
export default [
  {
    path: '/recharge',
    name: 'recharge',
    component: { render(h) { return h('router-view'); } },
    meta: {
      title: '充值管理',
      icon: 'icon-setting'
    },
    children: [
      {
        path: 'list',
        name: 'rechargeList',
        component: (resolve) => require(['@/views/recharge/RechargeList.vue'], resolve),
        meta: {
          title: '充值列表',
          icon: 'icon-setting'
        }
      },
      {
        path: 'rule',
        name: 'rechargeRule',
        component: (resolve) => require(['@/views/recharge/RechargeRule.vue'], resolve),
        meta: {
          title: '充值规则',
          icon: 'icon-setting'
        }
      },
    ]
  }
];

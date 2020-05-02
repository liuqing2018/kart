export default [
  {
    path: '/finance',
    name: 'finance',
    // component: { render(h) { return h('router-view'); } },
    component: (resolve) => require(['@/views/recharge/RechargeList.vue'], resolve),
    meta: {
      title: '财务查询',
      icon: 'icon-setting'
    },
    children: [
      // {
      //   path: 'list',
      //   name: 'rechargeList',
      //   component: (resolve) => require(['@/views/recharge/RechargeList.vue'], resolve),
      //   meta: {
      //     title: '充值列表',
      //     icon: 'icon-setting'
      //   }
      // },
      // {
      //   path: 'rule',
      //   name: 'rechargeRule',
      //   component: (resolve) => require(['@/views/recharge/RechargeRule.vue'], resolve),
      //   meta: {
      //     title: '充值规则',
      //     icon: 'icon-setting'
      //   }
      // },
    ]
  }
];

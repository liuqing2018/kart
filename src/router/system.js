export default [
  {
    path: '/system',
    name: 'system',
    // component: { render(h) { return h('router-view'); } },
    component: (resolve) => require(['@/views/recharge/RechargeList.vue'], resolve),
    meta: {
      title: '系统设置',
      icon: 'icon-setting'
    },
    children: [
      {
        path: 'role',
        name: 'role',
        component: (resolve) => require(['@/views/recharge/RechargeList.vue'], resolve),
        meta: {
          title: '角色管理',
          icon: 'icon-setting'
        }
      },
      {
        path: 'user',
        name: 'user',
        component: (resolve) => require(['@/views/recharge/RechargeRule.vue'], resolve),
        meta: {
          title: '用户管理',
          icon: 'icon-setting'
        }
      },
      {
        path: 'priceRule',
        name: 'priceRule',
        component: (resolve) => require(['@/views/recharge/RechargeRule.vue'], resolve),
        meta: {
          title: '计费规则',
          icon: 'icon-setting'
        }
      },
      {
        path: 'chargeRule',
        name: 'chargeRule',
        component: (resolve) => require(['@/views/recharge/RechargeRule.vue'], resolve),
        meta: {
          title: '充值规则',
          icon: 'icon-setting'
        }
      },
      {
        path: 'store',
        name: 'store',
        component: (resolve) => require(['@/views/recharge/RechargeRule.vue'], resolve),
        meta: {
          title: '门店管理',
          icon: 'icon-setting'
        }
      },
      {
        path: 'config',
        name: 'config',
        component: (resolve) => require(['@/views/recharge/RechargeRule.vue'], resolve),
        meta: {
          title: '系统配置',
          icon: 'icon-setting'
        }
      }
    ]
  }
];

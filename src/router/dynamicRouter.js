/**
 * 动态路由：本页面的路由将会根据服务器返回权限，进行动态匹配
 */
export default [
  {
    path: '/member',
    name: 'member',
    component: { render(h) { return h('router-view'); } },
    // component: (resolve) => require(['@/views/member/MemberList.vue'], resolve),
    meta: {
      title: '会员管理',
      icon: 'icon-setting'
    },
    children: [
      {
        path: 'memberList',
        name: 'memberList',
        component: (resolve) => require(['@/views/member/MemberList.vue'], resolve),
        meta: {
          title: '会员列表',
          icon: 'icon-setting'
        }
      },
      {
        path: 'memberAdd',
        name: 'memberAdd',
        component: (resolve) => require(['@/views/member/MemberAdd.vue'], resolve),
        meta: {
          title: '添加会员',
          hideInMenu: true,
          activeMenu: 'memberList',
          icon: 'icon-setting'
        }
      },
    ]
  },
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
  },
];

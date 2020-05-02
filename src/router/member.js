/**
 * Created by tudou on 2020/4/28 23:40.
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
        component: (resolve) => require(['@/views/member/MemberForm.vue'], resolve),
        meta: {
          title: '添加会员',
          hideInMenu: true,
          activeMenu: 'memberList',
          icon: 'icon-setting'
        }
      },
      {
        path: 'memberEdit/:id',
        name: 'memberEdit',
        component: (resolve) => require(['@/views/member/MemberForm.vue'], resolve),
        meta: {
          title: '编辑会员',
          hideInMenu: true,
          activeMenu: 'memberList',
          icon: 'icon-setting'
        }
      },
    ]
  }
];

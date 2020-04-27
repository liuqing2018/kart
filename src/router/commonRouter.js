/*
* 本页面为公共路由，即所有用户都有的页面
* title: '待办事项'   左侧菜单名称
* hideInMenu: true   开启此项不在左侧菜单中显示名称
* activeMenu: 'home' 进入hideInMenu: true的页面，左侧选中的菜单
* hideInBread: true  开启此项后面包屑导航上不显示对应的菜单名称
* icon: 'icon'       字体图标使用的iconfont
* */
export default [
  {
    path: '/',
    name: 'index',
    component: (resolve) => require(['@/views/main/Index.vue'], resolve),
    meta: {
      title: '工作台',
      icon: 'icon-setting'
    },
    children: [
      {
        path: 'home',
        name: 'home',
        // component: (resolve) => require(['@/views/home/Home.vue'], resolve),
        component: { render(h) { return h('router-view'); } },
        meta: {
          title: '工作台',
          hideInMenu: true,
          hideInBread: true,
          icon: 'icon-setting'
        },
        children: [
          {
            path: '',
            name: 'workbench',
            component: (resolve) => require(['@/views/home/Home.vue'], resolve),
            meta: {
              title: '待办事项',
              hideInMenu: true,
              hideInBread: true,
              activeMenu: 'home',
              icon: 'icon-setting'
            },
          },
          {
            path: 'todoList',
            name: 'todoList',
            component: (resolve) => require(['@/views/home/TodoList.vue'], resolve),
            meta: {
              title: '待办事项',
              hideInMenu: true,
              activeMenu: 'home',
              icon: 'icon-setting'
            },
          },
          {
            path: 'message',
            name: 'message',
            component: (resolve) => require(['@/views/home/Message.vue'], resolve),
            meta: {
              title: '消息中心',
              hideInMenu: true,
              activeMenu: 'home',
              icon: 'icon-setting'
            },
          },
          {
            path: 'userInfo',
            name: 'userInfo',
            component: (resolve) => require(['@/views/home/UserInfo.vue'], resolve),
            meta: {
              title: '我的资料',
              hideInMenu: true,
              activeMenu: 'home',
              icon: 'icon-setting'
            },
          },
        ],
      },
      // {
      //   path: '404',
      //   name: 'page404',
      //   component: (resolve) => require(['@/views/result/Page404.vue'], resolve),
      //   meta: {
      //     title: '404',
      //     hideInMenu: true,
      //     hideInBread: true,
      //   },
      //   children:[]
      // },
      // {
      //   path: '*',
      //   redirect: { name: 'page404' },
      //   meta: {
      //     title: '404',
      //     hideInMenu: true,
      //     hideInBread: true,
      //   },
      //   children:[]
      // },
    ],
  },
];

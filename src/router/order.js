export default [
  {
    path: 'order',
    name: 'order',
    component: { render(h) { return h('router-view'); } },
    meta: {
      title: '订单管理',
      icon: 'icon-setting'
    },
    children: [
      {
        path: 'orderList',
        name: 'orderList',
        component: (resolve) => require(['@/views/order/OrderList.vue'], resolve),
        meta: {
          title: '订单列表',
          hideInMenu: true,
          hideInBread: true,
          icon: 'icon-setting'
        }
      },
      {
        path: 'orderInfo',
        name: 'orderInfo',
        component: (resolve) => require(['@/views/order/OrderForm.vue'], resolve),
        meta: {
          title: '订单详情',
          hideInMenu: true,
          // hideInBread: true,
          activeMenu: 'orderList',
          icon: 'icon-setting'
        },
      },
      {
        path: 'orderEdit',
        name: 'orderEdit',
        component: (resolve) => require(['@/views/order/OrderForm.vue'], resolve),
        meta: {
          title: '退单',
          hideInMenu: true,
          // hideInBread: true,
          activeMenu: 'orderList',
          icon: 'icon-setting'
        },
      }
    ]
  },
  // {
  //   path: 'orderInfo',
  //   name: 'orderInfo',
  //   component: (resolve) => require(['@/views/order/OrderForm.vue'], resolve),
  //   meta: {
  //     title: '订单详情',
  //     icon: 'icon-setting'
  //   },
  // }
];

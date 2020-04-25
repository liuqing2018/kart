/**
 * Created by tudou on 2020/4/24 23:13.
 */
export default [
  {
    path: '/',
    name: 'index',
    component: (resolve) => require(['@/views/main/Index.vue'], resolve),
    meta: {
      title: '首页',
      icon: 'icon-setting'
    },
    children: [],
  },
  {
    path: '/home',
    name: 'home',
    component: (resolve) => require(['@/views/home/Home.vue'], resolve),
    meta: {
      title: '工作台',
      icon: 'icon-setting'
    },
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: (resolve) => require(['@/views/main/Index.vue'], resolve),
    meta: {
      title: '待办事项',
      icon: 'icon-setting'
    },
  },
  {
    path: '/message',
    name: 'message',
    component: (resolve) => require(['@/views/main/Index.vue'], resolve),
    meta: {
      title: '消息中心',
      icon: 'icon-setting'
    },
  },
  {
    path: '/center/:id',
    name: 'center',
    component: (resolve) => require(['@/views/main/Index.vue'], resolve),
    meta: {
      title: '我的资料',
      icon: 'icon-setting'
    },
  },
  {
    path: '/404',
    name: '404',
    component: (resolve) => require(['@/views/main/Index.vue'], resolve),
  },
  {
    path: '*',
    redirect: '/404',
  },
];

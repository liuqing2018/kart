import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: (resolve) => require(['@/views/login/Login.vue'], resolve),
    meta: {
      title: '登录',
      isGuest: true, // 不需要登录就能访问
    },
  },
];

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: (resolve) => require(['@/views/main/Index.vue'], resolve),
    children: [
      {
        path: '/member',
        name: 'member',
        component: (resolve) => require(['@/views/member/MemberList.vue'], resolve),
      },
      {
        path: '/memberAdd',
        name: 'memberAdd',
        component: (resolve) => require(['@/views/member/MemberAdd.vue'], resolve),
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const cancelList = Object.values(window.cancelMap || {});
  cancelList.forEach((cancel) => cancel());
  window.cancelMap = {};
  next();
});
export default router;

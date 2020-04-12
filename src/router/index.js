import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: resolve => require(['@/views/main/Index.vue'], resolve),
  },
  {
    path: '/about',
    name: 'About',
    component: resolve => require(['@/views/About'], resolve),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

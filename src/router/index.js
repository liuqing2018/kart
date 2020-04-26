import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import { getCookie, recursionList, setDefaultRoute } from '@/libs/utils';
import { tokenKey } from '@/config';
import { permissionList as getPermissionListApi } from '@/api/user';
import dynamicRouter from '@/router/dynamicRouter';
import commonRouter from '@/router/commonRouter';

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

router.beforeEach((to, from, next) => {
  // 切换路由，取消之前的所有请求
  const cancelList = Object.values(window.cancelMap || {});
  cancelList.forEach((cancel) => cancel());
  window.cancelMap = {};

  // 获取用户登录标识
  const token = getCookie(tokenKey);

  // 验证登录及权限
  if (!token) {
    console.log('============== 1 没有登录 =====================');
    if (to.matched.length > 0 && to.matched.some((record) => record.meta.isGuest)) {
      console.log('============== 1 但是不需要验证 =====================');
      next();
    } else {
      console.log('============== 1 需要验证 跳转到登录 =====================');
      next({ path: '/login' });
    }
  } else {
    // 已经登录 验证权限
    console.log('============== 2 已经登录 ==============');
    if (!store.state.app.permissionList.length) {
      // 没有权限 从新获取
      console.log('============== 2 但是没有权限 从新获取 ==============');
      // store.dispatch('getPermissionList').then(() => {
      //   next({
      //     path: to.path,
      //   });
      // });

      // 获取权限列表
      // const permissionResponse = await getPermissionListApi();
      getPermissionListApi.then((permissionResponse) => {
        const { menu } = permissionResponse.data;

        // 递归权限列表，动态加载有权限的路由
        const permissionRoutes = recursionList(menu, dynamicRouter);


        // 找到根路由，并将权限路由添加到里面
        const rootMenu = commonRouter.find((item) => item.path === '/');
        const { children } = rootMenu;
        children.push(...permissionRoutes);

        // 生成导航菜单
        store.commit('setMenuList', children);

        /*
            为所有有children的菜单路由设置第一个children为默认路由
            主要是供面包屑用，防止点击面包屑后进入某个路由下的 '' 路由,比如/manage/
            而我们的路由是
            [
                /manage/menu1,
                /manage/menu2
            ]
        */
        setDefaultRoute([rootMenu]);

        // 准备装载权限路由
        const initialRoutes = router.options.routes;

        // 动态添加路由
        router.addRoutes(commonRouter);

        // 最终的路由列表
        store.commit('setPermissionList', [...initialRoutes, ...commonRouter]);
      });
    } else {
      console.log('============== 3 有权限 ==============');
      if (to.path !== '/login') {
        console.log('============== 3 不是去往登录页面 通过 ==============');
        next();
      } else {
        console.log('============== 3 往登录页面 返回 ==============');
        next(from.fullPath);
      }
    }
  }

  next();
});

router.afterEach((to) => {
  console.log('====== to ========');
  console.log(to);
  const routerList = to.matched;
  console.log('====== routerList ========');
  console.log(routerList);
  // store.commit('setCurrentMenu', to.name);

  const result = [];
  routerList.forEach((item) => {
    result.push({
      path: item.path,
      breadcrumbName: item.meta.title,
    });
  });

  store.commit('setBreadCrumbList', result);
});

export default router;

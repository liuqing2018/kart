import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import {
  getCookie,
  recursionList,
  setDefaultRoute,
  getEffectiveMenu,
} from '@/libs/utils';
import { isAuth, tokenKey } from '@/config';
import { permissionList as getPermissionListApi } from '@/api/user';
import dynamicRouter from '@/router/dynamicRouter';
import commonRouter from '@/router/baseRouter';

Vue.use(VueRouter);

// 解决在控制台的 NavigationDuplicated 报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

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

      // 获取权限列表
      // const permissionResponse = await getPermissionListApi();
      getPermissionListApi().then((permissionResponse) => {
        const { menu } = permissionResponse.data;

        // 递归权限列表，动态加载有权限的路由
        const permissionRoutes = isAuth ? recursionList(menu, dynamicRouter) : dynamicRouter;

        // 找到根路由，并将权限路由添加到里面
        const rootMenu = commonRouter.find((item) => item.path === '/');
        const { children } = rootMenu;
        children.push(...permissionRoutes);

        // 移除hideInMenu的菜单
        const menuList = getEffectiveMenu(children);

        // 生成导航菜单
        store.commit('setMenuList', menuList);

        // 为所有有children的菜单路由设置第一个children为默认路由
        setDefaultRoute([rootMenu]);

        // 准备装载权限路由
        const initialRoutes = router.options.routes;

        // 动态添加路由
        router.addRoutes(commonRouter);

        // 最终的路由列表
        store.commit('setPermissionList', [...initialRoutes, ...commonRouter]);
        next({
          path: to.path,
        });
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
});

router.afterEach((to) => {
  const routerList = to.matched;
  let currentMenu = to.name;

  // 直接把routerList提交过去会报错：！！！ "RangeError: Maximum call stack size exceeded"
  const result = [];
  routerList.forEach((item) => {
    !item.meta.hideInBread && result.push({
      path: item.path || '/',
      breadcrumbName: item.meta.title,
    });
  });

  if (to.meta && to.meta.hideInMenu) {
    currentMenu = to.meta.activeMenu;
  }

  // 设置面包屑
  store.commit('setBreadCrumbList', result);

  // 设置当前选中的菜单
  store.commit('setCurrentMenu', [currentMenu]);
});

export default router;

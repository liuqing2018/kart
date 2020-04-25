import Vue from 'vue';
// import {
//   Button,
//   Input,
//   InputNumber,
//   Icon,
//   message,
//   notification,
// } from 'ant-design-vue';
import Antd from 'ant-design-vue';
import { getCookie } from '@/libs/utils';
import { tokenKey } from '@/config';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './style/index.less';
import IIcon from './components/IIcon';
import i18n from './locale';

// import './mock/index';

Vue.config.productionTip = false;

// Vue.component(Button.name, Button);
// Vue.component(Input.name, Input);
// Vue.component(InputNumber.name, InputNumber);
// Vue.component(Icon.name, Icon);
Vue.use(Antd);
Vue.component('IIcon', IIcon);

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
      store.dispatch('getPermissionList').then(() => {
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
  routerList.forEach(item => {
    result.push({
      path: item.path,
      breadcrumbName: item.meta.title,
    });
  });

  store.commit('setBreadCrumbList', result);
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

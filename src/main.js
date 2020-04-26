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
// import { getCookie, recursionList, setDefaultRoute } from '@/libs/utils';
// import { tokenKey } from '@/config';
// import dynamicRouter from '@/router/dynamicRouter';
// import commonRouter from '@/router/commonRouter';
// import { permissionList as getPermissionListApi } from '@/api/user';
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

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

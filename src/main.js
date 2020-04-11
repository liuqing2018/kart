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
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './style/index.less';
import MyIcon from './components/MyIcon';
import i18n from './locale';

Vue.config.productionTip = false;

// Vue.component(Button.name, Button);
// Vue.component(Input.name, Input);
// Vue.component(InputNumber.name, InputNumber);
// Vue.component(Icon.name, Icon);
Vue.use(Antd);
Vue.component('MyIcon', MyIcon);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

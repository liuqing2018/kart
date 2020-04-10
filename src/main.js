import Vue from 'vue';
import {
  Button,
  Input,
  InputNumber,
  message,
  notification,
} from 'ant-design-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './style/style.less';
import MyIcon from './components/MyIcon';
import i18n from './locale';

Vue.config.productionTip = false;

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);
Vue.component('MyIcon', MyIcon);

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

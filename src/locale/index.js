/**
 * Created by tudou on 2020/4/10 20:37.
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/store/index';
import zh_CN from './zh_CN'; // 中文包
import en_US from './en_US'; // 英文包

Vue.use(VueI18n);

const locales = {
  zh_CN,
  en_US
};

const i18n = new VueI18n({
  locale: store.state.app.locale,
  messages: locales
});

export default i18n;

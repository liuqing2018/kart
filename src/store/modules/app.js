/**
 * Created by tudou on 2020/4/10 18:11.
 */
import { getLocal, setLocal } from '../../libs/utils';
import { defaultLang, localeKey } from '../../config';

export default {
  namespace: true,
  state: {
    // 多语言支持 zh_CN || en_US
    locale: defaultLang
  },
  getters: {
    getLocale(state) {
      return getLocal(localeKey) || state.locale;
    },
  },

  // 同步更改state的方法
  mutations: {
    setLocale(state, payload) {
      state.locale = payload;
      setLocal(localeKey, payload);
    },
  },

  // 异步更改state，只能提交到mutations
  actions: {}
};

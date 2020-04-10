/**
 * Created by tudou on 2020/4/10 18:11.
 */
import { getLocal, setLocal } from '../../lib/utils';
import { DEFAULT_LANG, LOCALE_KEY } from '../../lib/config';

export default {
  namespace: true,
  state: {
    // 多语言支持 zh_CN || en_US
    locale: DEFAULT_LANG
  },
  getters: {
    getLocale(state) {
      return getLocal(LOCALE_KEY) || state.locale;
    },
  },

  // 同步更改state的方法
  mutations: {
    setLocale(state, payload) {
      state.locale = payload;
      setLocal(LOCALE_KEY, payload);
    },
  },

  // 异步更改state，只能提交到mutations
  actions: {}
};

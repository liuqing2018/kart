/**
 * Created by tudou on 2020/4/10 18:11.
 */
import { getLocal, setLocal } from '../../libs/utils';
import { defaultLang, localeKey } from '../../config';

export default {
  namespace: true,
  state: {
    // 多语言支持 zh_CN || en_US
    locale: defaultLang,

    // 全局加载状态
    loading: false,

    // 是否禁用全局加载状态
    disableLoading: false,
  },
  getters: {
    getLocale(state) {
      return getLocal(localeKey) || state.locale;
    },
  },

  // 同步更改state的方法
  mutations: {
    // 切换多语言
    setLocale(state, payload) {
      state.locale = payload;
      setLocal(localeKey, payload);
    },

    // 设置全局loading状态
    setLoading(state, status) {
      state.loading = status;
    },

    // 设置是否禁用全局loading状态
    setDisableLoading(state, status) {
      state.disableLoading = status;
    },
  },

  // 异步更改state，只能提交到mutations
  actions: {}
};

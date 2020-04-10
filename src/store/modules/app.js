/**
 * Created by tudou on 2020/4/10 18:11.
 */
import { getLocal, setLocal } from '../../lib/utils';
export default {
  namespace: true,
  state: {
    // 多语言支持 zh_CN || en_US
    locale: 'zh_CN'
  },
  getters: {
    getLocale() {
      return getLocal('locale') || this.$store.state.locale;
    },
  },

  // 同步更改state的方法
  mutations: {
    setLocale(state, payload) {
      state.locale = payload;
      setLocal('locale', payload);
    },
  },

  // 异步更改state，只能提交到mutations
  actions: {}
}

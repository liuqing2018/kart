import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';

Vue.use(Vuex);

const isDev = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  strict: isDev,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app
  },
});

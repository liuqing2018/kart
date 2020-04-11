/**
* Created by tudou on 2020/4/10 22:49.
*/
<template>
  <a-layout class="y-inner">
    <app-sider>
      <app-menu></app-menu>
    </app-sider>
    <a-layout>
      <app-header></app-header>
      <app-content>
        <router-view></router-view>
      </app-content>
      <app-footer></app-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import AppSider from './AppSider';
import AppMenu from './AppMenu';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

export default {
  name: 'Index.vue',
  components: {
    AppSider,
    AppMenu,
    AppHeader,
    AppContent,
    AppFooter
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
</style>

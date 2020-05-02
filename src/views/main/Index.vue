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
      <!--<app-footer></app-footer>-->
    </a-layout>
  </a-layout>
</template>

<script>
import AppSider from './AppSider.vue';
import AppMenu from './AppMenu.vue';
import AppHeader from './AppHeader.vue';
import AppContent from './AppContent.vue';
// import AppFooter from './AppFooter.vue';

export default {
  name: 'Index.vue',
  components: {
    AppSider,
    AppMenu,
    AppHeader,
    AppContent,
    // AppFooter
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

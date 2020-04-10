/**
* Created by tudou on 2020/4/10 22:49.
*/
<template>
  <a-layout id="app-sider-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo"/>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user"/>
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera"/>
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload"/>
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { Layout, Menu } from 'ant-design-vue';
export default {
  name: 'Index.vue',
  components: {
    ALayout: Layout,
    ALayoutHeader: Layout.Header,
    ALayoutSider: Layout.Sider,
    ALayoutContent: Layout.Content,
    AMenu: Menu,
    AMenuItem: Menu.Item,
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="less" scoped>
  #app-sider-trigger {
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>

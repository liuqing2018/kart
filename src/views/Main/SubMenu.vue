/**
* Created by tudou on 2020/4/11 10:36.
*/
<template functional>
  <a-sub-menu
    :key="props.menuData.path"
  >
    <span slot="title">
      <i-icon :type="props.menuData.meta.icon"></i-icon>
      <span>{{props.menuData.meta.title}}</span>
    </span>
    <template v-for="menu in props.menuData.children">
      <sub-menu
        v-if="menu.children && menu.children.length > 0 && hideInMenu(item.children)"
        :key="menu.path"
        :menu-data="menu">
      </sub-menu>
      <a-menu-item v-else-if="menu.meta && !menu.meta.hideInMenu" :key="menu.path">
        <i-icon :type="menu.meta.icon"></i-icon>
        <span>{{ menu.meta.title }}</span>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>

<script>

export default {
  name: 'sub-menu',
  props: ['menuData'],
  components: {
  },
  data() {
    return {};
  },
  methods: {
    hideInMenu(children) {
      return children.some((item) => !item.meta.hideInMenu);
    }
  }
};
</script>

<style lang="less" scoped>

</style>

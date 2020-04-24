/**
* Created by tudou on 2020/4/11 10:36.
*/
<template functional>
  <a-sub-menu
    :key="props.menuData.url"
  >
    <span slot="title">
      <i-icon :type="props.menuData.icon"></i-icon>
      <span>{{props.menuData.title}}</span>
    </span>
    <template v-for="menu in props.menuData.children">
      <sub-menu
        v-if="menu.children && menu.children.length > 0"
        :key="menu.url"
        :menu-data="menu">
      </sub-menu>
      <a-menu-item v-else :key="menu.url">
        <i-icon :type="menu.icon"></i-icon>
        <span>{{ menu.title }}</span>
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
  methods: {}
};
</script>

<style lang="less" scoped>

</style>

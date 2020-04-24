/**
* Created by tudou on 2020/4/11 17:45.
*/
<template>
  <a-menu
    mode="inline"
    theme="dark"
    :defaultSelectedKeys="['1']"
    @click="handleMenuClick"
  >
    <template v-for="item in menuList">
      <sub-menu
        v-if="item.children && item.children.length > 0"
        :menu-data="item"
        :key="item.url">
      </sub-menu>
      <a-menu-item v-else :key="item.url">
        <i-icon :type="item.icon"></i-icon>
        <span>{{ item.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script>
import SubMenu from './SubMenu.vue';
import menuList from '../../mock/menu';

export default {
  name: 'AppMenu',
  components: {
    SubMenu
  },
  data() {
    return {
      menuList
    };
  },
  methods: {
    handleMenuClick({ item, key, keyPath }) {
      console.log('handleMenuClick: ');
      console.log(item);
      console.log(key);
      console.log(keyPath);
      this.$router.push({
        path: key
      })
    },
  }
};
</script>

<style lang="less" scoped>

</style>

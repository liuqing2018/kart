/**
* Created by tudou on 2020/4/11 17:45.
*/
<template>
  <a-menu
    mode="inline"
    theme="dark"
    v-model="currentMenu"
    @click="handleMenuClick"
  >
    <template v-for="item in menuList">
      <sub-menu
        v-if="item.children && item.children.length > 0 && hideInMenu(item.children)"
        :menu-data="item"
        :key="item.path">
      </sub-menu>
      <a-menu-item v-else :key="item.path">
        <i-icon :type="item.meta.icon"></i-icon>
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script>
import SubMenu from './SubMenu.vue';
// import { mapState} from 'vuex';

export default {
  name: 'AppMenu',
  components: {
    SubMenu
  },
  data() {
    return {
    };
  },
  computed: {
    menuList() {
      return this.$store.state.app.menuList;
    },
    currentMenu: {
      get() {
        return this.$store.state.app.currentMenu;
      },
      set(val) {
        this.$store.commit('setCurrentMenu', val);
      }
    }
  },
  methods: {
    handleMenuClick({ item, key, keyPath }) {
      console.log('handleMenuClick: ');
      console.log('====== item ============');
      console.log(item);
      console.log('====== key ============');
      console.log(key);
      console.log('====== key path ============');
      console.log(keyPath);
      this.$router.push({
        name: key
      });
    },
    hideInMenu(children) {
      return children.some((item) => !item.meta.hideInMenu);
    }
  }
};
</script>

<style lang="less" scoped>

</style>

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
        :key="item.title">
      </sub-menu>
      <a-menu-item v-else :key="item.title">
        <my-icon :type="item.icon"></my-icon>
        <span>{{ item.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script>
import SubMenu from './SubMenu.vue';

export default {
  name: 'AppMenu',
  components: {
    SubMenu
  },
  data() {
    return {
      menuList: [
        {
          key: '1',
          title: '会员管理',
          url: '/home',
          icon: 'icon-setting',
          children: []
        },
        {
          key: '2',
          title: '充值管理',
          url: '/home',
          icon: 'icon-setting',
          children: []
        },
        {
          key: '3',
          title: '车辆管理',
          url: '/home',
          icon: 'icon-setting',
          children: []
        },
        {
          key: '4',
          title: '流水管理',
          url: '/home',
          icon: 'icon-setting',
          children: [
            {
              key: '4-1',
              title: '消费流水',
              url: '/home',
              icon: 'icon-setting',
              children: []
            },
            {
              key: '4-2',
              title: '退款流水',
              url: '/home',
              icon: 'icon-setting',
              children: []
            },
            {
              key: '4-3',
              title: '充值流水',
              url: '/home',
              icon: 'icon-setting',
              children: []
            },
            {
              key: '4-4',
              title: '比赛流水',
              url: '/home',
              icon: 'icon-setting',
              children: []
            },
          ]
        },
        {
          key: '5',
          title: '财务汇总',
          url: '/home',
          icon: 'icon-setting',
          children: []
        },
        {
          key: '6',
          title: '系统设置',
          url: '/home',
          icon: 'icon-setting',
          children: []
        },
      ]
    };
  },
  methods: {
    handleMenuClick(item, key, keyPath) {
      console.log('handleMenuClick: ');
      console.log(item);
      console.log(key);
      console.log(keyPath);
    },
  }
};
</script>

<style lang="less" scoped>

</style>

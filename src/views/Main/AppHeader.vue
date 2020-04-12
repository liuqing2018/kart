/**
* Created by tudou on 2020/4/11 20:49.
*/
<template>
  <a-layout-header class="app-header">
    <div class="app-header__message mr-10">
      <p class="text-ellipsis">
        <app-bread-crumb></app-bread-crumb>
      </p>
    </div>
    <div class="app-header__action">
      <div class="app-header__action--item">
        <a-badge :count="0">
          <span class="action__notice">
            <my-icon type="icon-msg"></my-icon>
          </span>
        </a-badge>
      </div>
      <div class="app-header__action--item">
        <a-dropdown>
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            <a-avatar
              size="small"
              shape="circle"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586670136069&di=00a3b144f4007762a955d226c178b4d5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200228%2F1585b57537874b7eb4e06649cd1ff9cf.jpeg" />
            高人 <my-icon type="icon-menu-down"></my-icon>
          </a>
          <a-menu slot="overlay">
            <a-menu-item-group key="g1">
              <a-menu-item key="1">
                <my-icon class="mr-10" type="icon-user"></my-icon>
                <span>我的资料</span>
              </a-menu-item>
              <a-menu-item key="2">
                <my-icon class="mr-10" type="icon-pwd"></my-icon>
                <span>修改密码</span>
              </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="g2">
              <a-menu-item>
              <my-icon class="mr-10" type="icon-exit"></my-icon>
              <span>退出登录</span>
              </a-menu-item>
            </a-menu-item-group>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="app-header__action--item">
        <a-radio-group @change="handleLocaleChange" defaultValue="zh_CN">
          <a-radio-button value="zh_CN">中文</a-radio-button>
          <a-radio-button value="en_US">English</a-radio-button>
        </a-radio-group>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import AppBreadCrumb from './AppBreadCrumb.vue';

export default {
  name: 'AppHeader',
  components: {
    AppBreadCrumb,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    handleLocaleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="less" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: #fff;

  .app-header__message {
    flex: 1 1 auto;
    overflow: hidden;
  }
  .app-header__action {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;

    .app-header__action--item {
      margin-left: 20px;
    }
  }

  .action__notice {
    display: inline-block;
    padding: 5px;
  }
}
</style>

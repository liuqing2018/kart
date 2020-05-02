/**
* Created by tudou on 2020/4/11 17:57.
*/
<template>
  <a-layout-sider :trigger="null" collapsible v-model="collapsed">
    <div class="menu-title__wrap">
      <span v-if='!collapsed'>{{$t('app.title')}}</span>
      <i-icon
        class="ml-10"
        :type="collapsed ? 'icon-unfold' : 'icon-fold'"
        @click="()=> collapsed = !collapsed"
      />
    </div>
    <div class="menu-title__content">
      <slot></slot>
    </div>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'AppSider',
  components: {},
  directives: {},
  filters: {},
  extends: {},
  props: {},
  data() {
    return {
      collapsed: false
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {
  },
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="less" scoped>
  @menu-title-height: 64px;

  .menu-title__wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: @menu-title-height;
    font-size: 16px;
    color: #fff;
    transition: 3s;
  }
  .menu-title__content {
    height: calc(~"100% - @{menu-title-height}");
    overflow: auto;
  }
</style>

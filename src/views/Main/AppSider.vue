/**
* Created by tudou on 2020/4/11 17:57.
*/
<template>
  <a-layout-sider :trigger="null" collapsible v-model="collapsed" style="overflow: auto">
    <div class="menu-title__wrap">
      <span v-if='!collapsed'>{{$t('app.title')}}</span>
      <my-icon
        class="ml-10"
        :type="collapsed ? 'icon-unfold' : 'icon-fold'"
        @click="()=> collapsed = !collapsed"
      />
    </div>
    <slot></slot>
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
  .menu-title__wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 64px;
    /*padding-left: 24px;*/
    font-size: 16px;
    color: #fff;
    transition: 3s;
  }
  /*.menu-title--center {*/
    /*justify-content: center;*/
  /*}*/
</style>

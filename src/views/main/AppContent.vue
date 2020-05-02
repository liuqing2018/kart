/**
* Created by tudou on 2020/4/11 20:47.
*/
<template>
  <a-layout-content class="app-content">
    <slot></slot>
  </a-layout-content>
</template>

<script>
export default {
  name: 'AppContent',
  components: {},
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
  methods: {}
};
</script>

<style lang="less" scoped>
.app-content {
  /*margin: 16px;*/
  /*padding: 24px;*/
  min-height: 280px;
  /*background: #fff;*/
  /*border: 1px solid red;*/
}
</style>

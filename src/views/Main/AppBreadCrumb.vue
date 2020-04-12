/**
* Created by tudou on 2020/4/12 11:48.
*/
<template>
  <div class="app-bread-crumb">
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'AppBreadCrumb',
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
.app-bread-crumb {
  margin: 16px 0 0 16px;
}
</style>

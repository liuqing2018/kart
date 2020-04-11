/**
* Created by tudou on 2020/4/11 20:47.
*/
<template>
  <a-layout-content
    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }" style="border: 2px solid red;"
  >
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

</style>

/**
* Created by tudou on 2020/4/30 21:11.
*/
<template>
  <a-popconfirm
    :title="title"
    @confirm="handleConfirm"
  >
    <a-button type="link" size="small">{{label}}</a-button>
  </a-popconfirm>
</template>

<script>
  export default {
    name: 'iButtonDelete',
    props: {
      title: {
        type: String,
        default: '此操作将永久删除该数据，请确定是否要删除？'
      },
      label: {
        type: String,
        default: '删除'
      }
    },
    data() {
      return {};
    },
    computed: {},
    created() {
    },
    methods: {
      handleConfirm() {
        console.log('handleConfirm....');
        this.$emit('on-confirm');
      }
    },
  };
</script>

<style lang="less" scoped>

</style>

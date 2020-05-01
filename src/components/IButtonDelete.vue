/**
* Created by tudou on 2020/4/30 21:11.
*/
<template>
  <a-popconfirm
    :title="confirmTitle"
    @confirm="handleConfirm"
  >
    <a-button type="link" size="small">{{btnText}}</a-button>
  </a-popconfirm>
</template>

<script>
  export default {
    name: 'iButtonDelete',
    props: {
      title: {
        type: String,
      },
      label: {
        type: String,
      }
    },
    data() {
      return {};
    },
    computed: {
      confirmTitle() {
        return this.title || this.$t('common.deleteConfim');
      },
      btnText() {
        return this.label || this.$t('common.deleteBtn');
      }
    },
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

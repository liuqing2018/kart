<!-- 统一table样式 -->
<template>
  <a-table
    bordered
    :columns="columns"
    :dataSource="dataSource"
    :pagination="false"
    :scroll="{ x: 1300 }">
  </a-table>
</template>

<script>
export default {
  name: 'ITable',
  components: {},
  props: {
    columns: {
      type: Array,
      require: true
    },
    dataSource: {
      type: Array,
      require: true
    },
    pagination: {
      type: Boolean,
      default: false
    }
  },
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
  methods: {},
};
</script>

<style lang="less" scoped>

</style>

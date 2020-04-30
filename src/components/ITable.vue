<!-- 统一table样式 -->
<template>
  <a-table :columns="columns" :dataSource="dataSource" :pagination="false" bordered>
    <template v-for="colCustom in columnsCustom" :slot="colCustom.customRender" slot-scope="text, record, index">
      <slot :name="colCustom.customRender" :text="text" :record="record" :index="index"></slot>
    </template>
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
  computed: {
    columnsCustom() {
      return this.columns.filter((item) => item.scopedSlots).map((item) => item.scopedSlots);
    }
  },
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

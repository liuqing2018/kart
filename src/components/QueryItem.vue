/**
* Created by tudou on 2020/4/19 22:34.
*/
<template>
  <a-form-model-item :label="label" class="query__item">
    <slot></slot>
  </a-form-model-item>
</template>

<script>
export default {
  name: 'QueryItem',
  components: {},
  props: {
    label: {
      type: [String, Number],
      default: '',
    },
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
  methods: {}
};
</script>

<style lang="less" scoped>
  .query__item {
    display: flex;
    align-items: center;
    margin-right: 32px;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }
</style>

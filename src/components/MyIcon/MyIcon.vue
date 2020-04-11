/**
* Created by tudou on 2020/4/11 21:17.
*/
<template>
  <BaseIcon
    class="my-icon"
    :type="type"
    :theme="theme"
    :spin="spin"
    :rotate="rotate"
    :component="component"
    :twoToneColor="twoToneColor"
    @click="handleClick"
  >
  </BaseIcon>
</template>

<script>
import BaseIcon from './BaseIcon';

export default {
  name: 'MyIcon',
  components: {
    BaseIcon
  },
  props: [
    'type',
    // 'style',
    'theme',
    'spin',
    'rotate',
    'component',
    'twoToneColor'
  ],
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
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/modules/variables";
.my-icon {
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: @primary-color;
  }
}

</style>

/**
* Created by tudou on 2020/4/11 21:17.
*/
<template>
  <BaseIcon
    class="i-icon"
    :type="type"
    :style="myStyle"
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
  name: 'IIcon',
  components: {
    BaseIcon
  },
  props: [
    'type',
    'myStyle',
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
.i-icon {
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: @primary-color;
  }
}

</style>

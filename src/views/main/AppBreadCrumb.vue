/**
* Created by tudou on 2020/4/12 11:48.
*/
<template>
  <div class="app-bread-crumb">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in breadCrumbList" :key="index">
        <router-link :to="item.path" v-if="index < breadCrumbList.length - 1">
          {{item.breadcrumbName}}
        </router-link>
        <span v-else>{{item.breadcrumbName}}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AppBreadCrumb',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    breadCrumbList() {
      return this.$store.state.app.breadCrumbList;
    }
  },
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

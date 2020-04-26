<template>
  <config-provider :locale="locale[lang]">
    <div id="app">
      <router-view></router-view>
    </div>
  </config-provider>
</template>

<script>
import { ConfigProvider } from 'ant-design-vue';

import en_US from 'ant-design-vue/es/locale/en_US';
import zh_CN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
export default {
  name: 'App',
  components: {
    ConfigProvider
  },
  data() {
    return {
      locale: {
        zh_CN,
        en_US,
      },
    };
  },
  computed: {
    lang() {
      return this.$store.getters.getLocale;
    }
  },
  created() {
  }
};
</script>
<style lang="less">
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1280px;
  height: 100%;
}

</style>

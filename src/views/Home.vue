<template>
  <div class="home">
    <h1>home</h1>
    <div>
      <divider orientation="left">locale</divider>
      <p>{{$t('app.title')}}</p>
    </div>
    <div>
      <Divider orientation="left">button</Divider>
      <div>
        <a-button type="primary" class="mr-10" @click="handleChangeLang('en_US')">English</a-button>
        <a-button type="danger " class="mr-10" @click="handleChangeLang('zh_CN')">中文</a-button>
      </div>
    </div>

    <div>
      <Divider orientation="left">IconFont</Divider>
      <my-icon type="el-icon-m-user" :spin="true" class="icon"></my-icon>
      <my-icon type="el-icon-m-pwd" :spin="true" class="icon"></my-icon>
    </div>
    <div>
      <divider orientation="left">TimePicker</divider>
      <TimePicker></TimePicker>
    </div>
  </div>
</template>

<script>
import { TimePicker, Divider } from 'ant-design-vue';

export default {
  name: 'Home',
  components: {
    TimePicker,
    Divider,
  },
  data() {
    return {};
  },
  methods: {
    handleChangeLang(localeValue) {
      this.$i18n.locale = localeValue;
      this.$store.commit('setLocale', localeValue);
    },
  }
};
</script>

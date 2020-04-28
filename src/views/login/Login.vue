/**
* Created by tudou on 2020/4/25 10:52.
*/
<template>
  <div>
    <h1>请登录</h1>
    <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
      <a-form-model-item>
        <a-input v-model="formInline.user" placeholder="Username">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="formInline.password" type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formInline.user === '' || formInline.password === ''"
        >
          Log in
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { login } from '@/api/user';
import { setCookie } from '@/libs/utils';
import { tokenKey } from '@/libs/config';

export default {
  name: 'Login',
  components: {},
  props: {},
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
    };
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
    handleSubmit() {
      console.log(this.formInline);
      console.log(login);
      login().then((res) => {
        const { token } = res.data;
        console.log(token);
        setCookie(tokenKey, token);
        this.$router.replace('/');
      });
    },
  }
};
</script>

<style lang="less" scoped>

</style>

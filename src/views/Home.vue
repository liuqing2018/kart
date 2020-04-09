<template>
  <div class="home">
    <h1>home</h1>
    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
      <!--<a-config-provider :autoInsertSpaceInButton="false">-->
      <!--<a-button type="primary">按钮</a-button>-->
      <!--</a-config-provider>-->
      <a-button type="primary">按钮</a-button>
      <a-button type="link">Link</a-button>

      <div class="icons-list">
        <a-icon type="home" />
        <a-icon type="setting" theme="filled" />
        <a-icon type="smile" theme="outlined" />
        <a-icon type="sync" spin />
        <a-icon type="smile" :rotate="180" />
        <a-icon type="loading" />
      </div>

      <my-icon type="el-icon-m-user" :spin="true" class="icon"></my-icon>
      <my-icon type="el-icon-m-pwd" :spin="true" class="icon"></my-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>

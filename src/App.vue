<template>
  <div id="app">
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
    <!--<router-view></router-view>-->
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<!--1. 组件的模板-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<!--3. 组件的行为-->
<script>
  // 3.1 组件数据  3.2 事件、生命周期函数
  export default {
    data:function () {
      return {
        title:'hi vuejs!'
      }
    }
  }
</script>

<!--2. 组件的样式-->
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

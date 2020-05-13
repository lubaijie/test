<template>
  <div id="app" :style="{height: bodyHeight+'px'}">
    <router-view/>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodyHeight: window.innerHeight
    }
  }
}
</script>

<style lang="scss">
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
.main-container{
  background-color: #ebedf0;
  height: 100%;
}
.default-cell{
  text-align: initial;
}
.van-address-edit__fields {
  overflow: hidden;
  border-radius: 0;
}
.van-address-edit__default {
  margin-top: 12px;
  overflow: hidden;
  border-radius: 0;
}
.van-address-list__bottom{
  display: none;
}
</style>

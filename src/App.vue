<template>
  <div id="app">
    <router-view/>
    <Landing></Landing>
  </div>
</template>

<script>
import Rem from "../static/js/rem.js"
import Landing from "../src/zb/landing.vue"
export default {
  name: 'App',
  mounted(){
    Rem.setrem();
    window.onresize=Rem.setrem;
  },components:{
    Landing
  }
}
</script>

<style>
@import url("../static/css/reset.css");
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

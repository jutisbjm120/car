<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
import Rem from "../static/js/rem.js"
export default {
  name: 'App',
  mounted(){
    Rem.setrem();
    window.onresize=Rem.setrem;
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

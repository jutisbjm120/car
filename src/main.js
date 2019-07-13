// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import betterScroll from 'better-scroll'
window.BS=betterScroll
Vue.use(Vant);
import axios from 'axios';
Vue.prototype.axios=axios;
//
import VueBetterScroll from 'vue2-better-scroll';
Vue.use(VueBetterScroll);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

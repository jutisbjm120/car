import Vue from 'vue'
import Router from 'vue-router'
import Mine from '../sjy/mine/mineindex.vue'
import shaixuan from '@/views/shaixuan'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/shaixuan', component: shaixuan },
    { path: '/', component: shaixuan }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Mine from '../sjy/mine/mineindex.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})

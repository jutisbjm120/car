import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../zb/landing.vue'
import Register from '../zb/register.vue'

import Mine from '../sjy/mine/mineindex.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'landing',
      name: 'Landing',
      component: Landing
    },
    {
      path: 'register',
      name: 'Register',
      component: Register
    },
      {
        
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})

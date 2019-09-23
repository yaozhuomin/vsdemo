import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import info from '@/views/info.vue'
import About from '@/views/About.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})

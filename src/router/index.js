import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    }
  ]
  
})












export default router

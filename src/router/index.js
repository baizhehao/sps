import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/sps-side'
Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    }
  ]
  
})












export default router
import Vue from 'vue'
import Router from 'vue-router'
import MmUsersList from '@/components/MmUsersList'
Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'MmUsersList',
      component: MmUsersList,
    }
  ]
  
})












export default router
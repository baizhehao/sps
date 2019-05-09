import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index'
import login from '@/pages/login'
import UsList from '@/components/content/sps-usList/MmUsersList'
import withdrawlist from '@/components/finance/withdraw-list'
import paylist from '@/components/finance/pay-list'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path:"/usList",
          component:UsList
        },
        {
          path:"/withdraw-list",
          component:withdrawlist
        },
        {
          path:"/pay-list",
          component:paylist
        }
      ]
    }
  ]
  
})












export default router

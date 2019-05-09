import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index'
import login from '@/pages/login'
import UsList from '@/components/content/sps-usList/MmUsersList'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },{
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {path:"usList",component:UsList}
      ]
    }
  ]
  
})












export default router

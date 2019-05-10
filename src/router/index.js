import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index'
import login from '@/pages/login'
import UsList from '@/components/content/sps-usList/MmUsersList'
import ShopList from '@/components/content/sps-shopManagement/sps-list/sps-shop-list'

import sps_right from '@/components/sps_right'
import youhui from '@/components/youhui'
import finance from '@/components/finance'
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
      redirect:'/sps_right',
      children:[
        {path:"usList",component:UsList},
        {path:"shopList",component:ShopList},
        {path:"/sps_right",component:sps_right},
        {path:"/youhui",component:youhui},
        {path:"/finance",component:finance}
      ]
    }
  ]

})

export default router

import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index'
import login from '@/pages/login'
import UsList from '@/components/content/sps-usList/MmUsersList'
import sps_right from '@/components/sps_right'
import youhui from '@/components/youhui'
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
        {path:"/usList",component:UsList},
        {path:"/sps_right",component:sps_right},
        {path:"/youhui",component:youhui}
      ]
    }
  ]

})












export default router

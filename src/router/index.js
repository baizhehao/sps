import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index'
import content1 from '@/components/sps-right'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'content1',
      component: index,
      children:[
        {path:'content1',component:content1}
      ]
    }
  ]

})












export default router

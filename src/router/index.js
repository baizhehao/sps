import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index'
import login from '@/pages/login'

import UsList from '@/components/content/sps-usList/MmUsersList'
import weixin from '@/components/content/weixin/weixin'
import model from '@/components/content/weixin/model'
import message from '@/components/content/weixin/message'

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
        {path:"usList",component:UsList},
        {path:"weixin",component:weixin},
        {path:"model",component:model},
        {path:"message",component:message}
      ]
    }
  ]
  
})












export default router

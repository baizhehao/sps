import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index'
import login from '@/pages/login'
// import UsList from '@/components/content/sps-usList/MmUsersList'
import brandList from '@/components/content/sps-merchandiseList/brandList'
import usList from '@/components/content/sps-usList/MmUsersList'
import withdrawlist from '@/components/finance/withdraw-list'
import paylist from '@/components/finance/pay-list'
import refundlist from '@/components/finance/refund-list'
import AccountManage from '@/components/finance/account-manage'

import ShopList from '@/components/content/sps-shopManagement/sps-list/sps-shop-list'
import imgList from '@/components/content/sps-controlPanel/sps-Image-list'
import operationLog from '@/components/content/sps-controlPanel/sps-operation-log'
import weixin from '@/components/content/weixin/weixin'
import model from '@/components/content/weixin/model'
import message from '@/components/content/weixin/message'

import sps_right from '@/components/sps_right'
import youhui from '@/components/youhui'
import finance from '@/components/finance'
import contorl_panel from '@/components/right/contorl_panel'
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
          component:usList
        },
        {
          path:"/withdraw-list",
          component:withdrawlist
        },
        {
          path:"/pay-list",
          component:paylist
        },
        {
          path:"/refund-list",
          component:refundlist
        },
        {
          path:"/account-manage",
          component:AccountManage
        },
        {path:"shopList",component:ShopList},
        {path:"sps_right",component:sps_right},
        {path:"youhui",component:youhui},
        {path:"finance",component:finance},
        {path:"model",component:model},
        {path:"message",component:message},
        {path:"weixin",component:weixin},
        {path:"brandList",component:brandList},
        {path:"imgList",component:imgList},
        {path:"operationLog",component:operationLog},
        {path:"/sps_right",component:sps_right},
        {path:"/youhui",component:youhui},
        {path:"/finance",component:finance},
        {path:"/contorl_panel",component:contorl_panel}
      ]
    }
  ]

})

export default router

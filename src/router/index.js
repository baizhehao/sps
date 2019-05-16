import Vue from 'vue'
import Router from 'vue-router'

/**
 * 页面级组件
 */
import index from '@/pages/index'
import login from '@/pages/login'
/**
 * content 内组件
 */
import brandList from '@/components/content/sps-merchandiseList/brandList'
import usList from '@/components/content/sps-usList/MmUsersList'
import withdrawList from '@/components/finance/withdraw-list'
import payList from '@/components/finance/pay-list'
import refundList from '@/components/finance/refund-list'
import AccountManage from '@/components/finance/account-manage'
import ShopList from '@/components/content/sps-shopManagement/sps-list/sps-shop-list'
import imgList from '@/components/content/sps-controlPanel/sps-Image-list'
import operationLog from '@/components/content/sps-controlPanel/sps-operation-log'
import weiXin from '@/components/content/weixin/weixin'
import model from '@/components/content/weixin/model'
import message from '@/components/content/weixin/message'
import spsRight from '@/components/sps_right'
import youHui from '@/components/youhui'
import finance from '@/components/finance'
import contorlPanel from '@/components/right/contorl_panel'
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
      redirect:'/index/spsRight',
      // beforeEnter(to,from,next){
      //   let useObj = JSON.parse(sessionStorage.getItem("data"))
      //   console.log(JSON.parse(sessionStorage.getItem("data")))
      //   if(useObj){
      //     next()
      //   }else{
      //     next("/")
      //   }
      // },
      children:[
        {path:"usList",component:usList},
        {path:"withdrawList",component:withdrawList},
        {path:"payList",component:payList},
        {path:"refundList",component:refundList},
        {path:"accountLanage",component:AccountManage},
        {path:"shopList",component:ShopList},
        {path:"model",component:model},
        {path:"message",component:message},
        {path:"weiXin",component:weiXin},
        {path:"brandList",component:brandList},
        {path:"imgList",component:imgList},
        {path:"operationLog",component:operationLog},
        {path:"spsRight",component:spsRight},
        {path:"youHui",component:youHui},
        {path:"finance",component:finance},
        {path:"contorlPanel",component:contorlPanel}
      ]
    }
  ]
})

export default router

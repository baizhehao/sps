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
      redirect:'/index/sps_right',
      // beforeEnter(to,from,next){
      //   let useObj = JSON.parse(sessionStorage.getItem("data"))
      //   if(useObj){
      //     next()
      //   }else{
      //     next("/")
      //   }
      // },
      children:[
        {path:"usList",component:UsList},
        {path:"shopList",component:ShopList},
        {path:"sps_right",component:sps_right},
        {path:"youhui",component:youhui},
        {path:"finance",component:finance}
      ]
    }
  ]
})

// router.beforeEach((to,from,next)=>{
//   /**
//    * to.path 要去的组件的路径  Set的操作方法 set.add()添加  delete删除、has是否有值、size 长度
//    */
  
//   let rouArr = Array.from(rouSet);
//   let rouStr = rouArr.join(',');
//   sessionStorage.setItem("rouPath",rouStr);
//   next()
// })
export default router

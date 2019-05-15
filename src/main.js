// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import router from './router'
import store from './store/store'
import '@/assets/icons/iconfont.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts';
import Vuex from "vuex"

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(Vuex);
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,echarts,
  components: { App },
  template: '<App/>'
})

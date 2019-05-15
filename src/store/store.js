import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        getShopsListS:'',
        //打开窗口的标签
        // windowTag:[]
        contorl_state:{
            
        }
    },
    getters:{
        getShopsListG(state){
           return state.getShopsListS
       }
    },
    mutations:{
        /**
         * 添加成功的返回值
         */
        getShopsListM(state,shopList){
            state.getShopsListS = shopList
        }
    },
    actions:{
        /**
         * 添加商品列表
         */
        getShopsList(store,that){
            that.$axios.get('http://10.35.164.18:3000/shopsList/getshopslist')
                .then((res)=>{
                    store.commit('getShopsListM',res.data)
                })
        }
    }
})

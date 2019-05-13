import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
       addShopsS:''
    },
    getters:{
       addShopsG(state){
           return state.addShopsS
       }
    },
    mutations:{
        /**
         * 添加成功的返回值
         */
        addShopsM(state,data){
            state.addShopsS = data
        }
    },
    actions:{
        /**
         * 添加商品列表
         */
        addShopsA(store,str){
            fetch('http://10.35.164.18:3000/shopsList/add',{
                method:'POST',
                body:str,
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            }).then((res)=>{
                return res.json()
            }).then((res)=>{
                console.log(res)
                store.commit('addShopsM',res)
            })
        }
    }
})

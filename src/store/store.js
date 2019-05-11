import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        //打开窗口的标签
        // windowTag:[]
    },
    getters:{
        /**
         * 获取窗口标签
         */
    //    getWindowTag(state){
    //        return state.windowTag
    //    }
    },
    mutations:{
        /**
         * 添加、删除标签
         */
        // addWindowTag(state,data){
        //     new Set(state.windowTag.push(data))
        // },
        // deleteWindowTag(state,index){
        //     state.windowTag.splice(index,1)
        // }
    },
    actions:{

    }
})

<template>
    <div class="shopBox">
        <spsShopListTop />
        <spsShopListContent :childData='shopsList' @click1='addShops'/>
    </div>
</template>

<script>
import spsShopListTop from './sps-shop-list-top'
import spsShopListContent from './sps-shop-list-content'
import querystring from "querystring"
import {mapGetters} from 'vuex'
export default {
    components:{
        spsShopListTop,spsShopListContent
    },
    data(){
        return{
            // shopsList:[]
            a:[]
        }
    },
    computed:{
       ...mapGetters({
           shopsList:'getShopsListG'
       }),
        ddd(){
            console.log('daf'+this.a )
            return this.a = this.$store.getShopsListG
        }
    },
    methods:{
        addShops(obj){
            let str = querystring.encode(obj)
            fetch('http://10.35.164.18:3000/shopsList/add',{
                method:'POST',
                body:str,
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            }).then((res)=>{
                return res.json()
            }).then((res)=>{
                if(res==1){
                    let that = this
                    this.$store.dispatch('getShopsList',that)
                    this.$Message.info('添加成功');
                }
            })
        }
    },
    created(){
        let that = this
        this.$store.dispatch('getShopsList',that)
    }
            
}
</script>

<style scoped>
.shopBox{
    padding:15px;
    background:#f2f2f2;
}

</style>

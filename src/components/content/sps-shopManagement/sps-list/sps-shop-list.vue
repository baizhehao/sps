<template>
    <div class="shopBox">
        <spsShopListTop />
        <spsShopListContent @clickZ='addShops()'/>
    </div>
</template>

<script>
import spsShopListTop from './sps-shop-list-top'
import spsShopListContent from './sps-shop-list-content'
export default {
    components:{
        spsShopListTop,spsShopListContent
    },
    data(){
        return{

        }
    },
    computed:{

    },
    methods:{
        addShops(){
            this.$store.dispatch('addShops')
        }
    }
            
}
</script>

<style scoped>
.shopBox{
    padding:15px;
    background:#f2f2f2;
}

</style>

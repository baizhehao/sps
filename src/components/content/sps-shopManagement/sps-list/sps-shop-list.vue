<template>
    <div class="shopBox">
        <spsShopListTop />
        <spsShopListContent/>
    </div>
</template>

<script>
import spsShopListTop from './sps-shop-list-top'

import spsShopListContent from './sps-shop-list-content'
export default {
    components:{
        spsShopListTop,spsShopListContent
    }
            
}
</script>

<style scoped>
.shopBox{
    padding:15px;
    background:#f2f2f2;
}

</style>

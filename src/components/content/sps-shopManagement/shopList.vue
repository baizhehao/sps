<template>
    <div class="shopBox">
        <div class="shopTop">
            <div>
                <!-- <label class="shopName">商品名称:</label><input type="text" placeholder="请输入商品名称">
                <div><span>上架状态:</span> -->
                <div>
                    商品名称:
                    <Input placeholder="请输入商品名称" style="width: auto" />
                </div>
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
            return {
                cityList: [
                    {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: '上架',
                        label: '上架'
                    },
                    {
                        value: '下架',
                        label: '下架'
                    }
                ],
                model1: ''
            }
        }
}
</script>

<style scoped>
.shopBox{
    padding:15px;
    background:#f2f2f2;
}
.shopTop{
    background:#ffffff;
    padding: 10px 10px 0 10px;
    border:1px solid #e6e6e6;
}
.shopName{
    font-size: 14px;
    /* display: block; */
    width: 70px;
    font-weight: 400;
    line-height: 20px;
    text-align: right;
    padding: 5px 2px;
}
</style>

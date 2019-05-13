<template>
        <div class="shopTop">
            <div class="topRowBox">
                <div class="topRow">
                    商品名称:
                    <Input placeholder="请输入商品名称" style="width:200px" />
                </div>
                <div class="topRow">
                    <label>上架状态</label>
                    <Select v-model="model1" style="width:100px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <Button type="primary" class="seachBut" size=small icon="ios-search">筛选</Button>
            </div>
            <div class="bottomBox">
                <Button type="primary" @click="modal1 = true" class="seachBut addBut" size=small icon="ios-add-circle-outline">添加商品</Button>
                <Modal
                    width='300'
                    v-model="modal1"
                    title="添加商品"
                    @on-ok="ok"
                    @on-cancel="cancel">
                        <div class="addClass" v-for='itme in shopsTit'>
                            {{itme}} : <Input :placeholder='"请输入"+itme' style="width: auto" />
                        </div>
                </Modal>
                <div class="topRow">
                    <label>批量操作</label>
                    <Select v-model="model1" style="width:100px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <Button type="primary" class="seachBut addBut" size=small icon="md-cloud-upload">导入商品</Button>
                <Button type="primary" class="seachBut addBut" size=small icon="md-cloud-download">导出</Button>
                <Button type="primary" class="seachBut addBut" size=small icon="ios-funnel-outline">高级筛选</Button>
            </div>
        </div>
</template>

<script>
export default {
    data () {
            return {
                modal1: false,
                loading: true,
                shopsTit:['缩略图','名称','排序','标签','售销价','成本价','市场价','分类','类型','品牌','上下架','库存'],
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
        },
    methods:{
        addShops(){
            this.$emit('clickZ',obj)
        },
        ok () {
                this.$Message.info('添加成功');
        },
        cancel () {
            this.$Message.info('Clicked cancel');
        }
    }
}
</script>

<style scoped>
.addClass{
    text-align: center;
    margin-bottom: 5px;
}
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
    width: 70px;
    font-weight: 400;
    line-height: 20px;
    text-align: right;
    padding: 5px 2px;
}
.topRow{
    display: inline;
    margin-right: 10px;
}
.topRowBox{
    height: 40px;
}
.seachBut{
    background:#FF7159 ;
    font-size: 14px;
    border-color:#FF7159;
    margin:0 8px;
}
.addBut{
    margin-left:0px;
}
.bottomBox{
    height: 40px;
}
</style>

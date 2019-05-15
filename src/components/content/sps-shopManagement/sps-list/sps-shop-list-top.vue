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
                        <Option v-for="item in cityList" :value="item.value" :key="item.id">{{ item.label }}</Option>
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
                    <div v-model="shopsTit" > 
                        <label class="addClass">
                            缩略图 : <Input v-model="shopsTit.value0" autofocus placeholder='请输入缩略图' style="width: auto"  />
                        </label>
                        <label class="addClass">
                            名称 : <Input v-model="shopsTit.value1" placeholder="请输入名称" style="width: auto"  />
                        </label>
                        <label class="addClass">
                            排序 : <Input v-model="shopsTit.value2" placeholder="请输入排序" style="width: auto"  />
                        </label>
                        <label class="addClass">
                            标签 : <Input v-model="shopsTit.value3" placeholder="请输入标签" style="width: auto"  />
                        </label>
                        <label class="addClass">
                            售销价 : <Input v-model="shopsTit.value4" placeholder="请输入售销价" style="width: auto"  />
                        </label>
                        <label class="addClass">
                            成本价 : <Input v-model="shopsTit.value5" placeholder="请输入成本价" style="width: auto"  />
                        </label>
                        <label class="addClass">
                            市场价 : <Input v-model="shopsTit.value6" placeholder="请输入市场价" style="width: auto"  />
                        </label>
                        <label class="addClass">
                            分类 : <Input v-model="shopsTit.value7" placeholder="请输入分类" style="width: auto"  />
                        </label>
                        <label class="addClass">
                            类型 : <Input v-model="shopsTit.value8" placeholder="请输入类型" style="width: auto"  />
                        </label>
                        <label class="addClass">
                            品牌 : <Input v-model="shopsTit.value9" placeholder="请输入品牌" style="width: auto"  />
                        </label>
                        <label class="addClass">
                            上下架 : <Input v-model="shopsTit.value10" placeholder="请输入上下架" style="width: auto"  />
                        </label>
                        <label class="addClass">
                            库存 : <Input v-model="shopsTit.value11" placeholder="请输入库存" style="width: auto"  />
                        </label>
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
                shopsTit:{value0:"",value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"",value10:"",value11:"",},
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
        ok () {
            this.$parent.addShops(this.shopsTit)
        },
        cancel () {
            this.$Message.info('Clicked cancel');
        }
    }
}
</script>

<style scoped>
.addClass{
    margin-bottom: 10px;
    display: block;
    text-align: right;
    padding-right: 36px;
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

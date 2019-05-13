<template>
    <div class=contorl>
        <div class="contorl_top">
            <label>订单号：</label><Input class="input_One" placeholder="请输入订单号" style="width: 300px" />
            <label>下单时间：</label><Row>
                        <Col span="12">
                            <DatePicker class="input_One" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                        </Col>
                    </Row>
            <label>订单来源：</label><Select class="input_One" v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
            <label>用户：</label><Input class="input_One" placeholder="用户名、昵称、手机" style="width: 300px" />
            <div class="labelBox">
                <label>手机号：</label><Input class="input_One" placeholder="收货人手机号" style="width: 300px" />
            </div>
            <div class="labelBox">
               <Button class="bottomBox" type="primary"><label class="iconfont">&#xe67a;</label>筛选</Button>
               <Button class="bottomBox" type="primary"><label class="iconfont">&#xe61f;</label>批量支付</Button>
               <Button class="bottomBox" type="primary"><label class="iconfont">&#xe608;</label>取消</Button>
               <Button class="bottomBox" type="primary"><label class="iconfont">&#xe60f;</label>导出</Button>
               <Button class="bottomBox" type="primary"><label class="iconfont">&#xe608;</label>批量打印快递单</Button>
            </div>
        </div>
        <div class="contorl_bottom">
            <div class="contorl_bottom_header">
                <ul class="contorl_ul">
                    <li>全部订单 <span>1137</span></li>
                    <li>待支付 <span class="green">203</span></li>
                    <li>待发货 <span class="black">596</span></li>
                    <li>待收货 <span class="blue">111</span></li>
                    <li>待评价 <span class="orange">34</span></li>
                    <li>已取消 <span>139</span></li>
                    <li>已完成 <span>251</span></li>
                </ul>
            </div>
            <contorl_son></contorl_son>
            <Page class="fenYe" :total="100" show-elevator />
        </div>
    </div>
</template>



<script>
import contorl_son from "./contorl_son"
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
            }
        },
        components:{
            contorl_son
        }
    }
</script>


<style>
    .contorl{
        padding:15px;
    }
    .contorl_top{
        width:100%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        background:#fff;
        padding:10px 10px 10px 20px;
        border:1px solid #e6e6e6;
    }
    label{
        font-size:16px;
    }
    .input_One{
        width:190px !important;
        margin-right:16px;
    }
    .labelBox{
        margin-top:10px;
    }
    .bottomBox{
        margin-right:10px;
        background:#FF7159;
        border:0;
    }
    .bottomBox:hover{
        background:#FF7159;
        opacity:.8;
        border:0;
    }
    .iconfont{
        margin-right:3px;
    }
    .contorl_bottom{
        padding:10px;
        background:#fff;
        margin-top:10px;
        border:1px solid #e6e6e6;
    }
    .contorl_bottom_header{
        margin-top:10px;
    }
    .contorl_ul{
        display:flex;
        font-size:14px;
        border:1px solid #e6e6e6;
        border-bottom:0;
    }
    .contorl_ul li{
        min-width:65px;
        padding:0 15px;
        text-align:center;
    }
    .contorl_ul li:first-child{
        border-right:1px solid #ccc;
    }
    .contorl_ul li span{
        font-size:12px;
        padding:0 6px;
        color:#666;
        background:#eee;
        border-radius:2px;
        line-height:40px;
    }
    .fenYe{
        border:1px solid #e6e6e6;
    }
    .green{
        background:green !important;
        color:#fff !important;
    }
    .black{
        background:black !important;
        color:#fff !important;
    }
    .blue{
        background:blue !important;
        color:#fff !important;
    }
    .orange{
        background:orange !important;
        color:#fff !important;
    }

    
</style>




<template>
   <div class="box">
        <div class="box-top">
           <div class="box-top-center">
               <div class="layui-inline">
                    <label class="layui-form-label">支付单号：</label>
                    <div class="layui-input-inline inline-1">
                        <input type="text" name="mobile" lay-verify="title" placeholder="请输入支付单号" autocomplete="off" class="layui-input">
                    </div>
               </div>
               <div class="layui-inline">
                    <label class="layui-form-label">第三方支付单号：</label>
                    <div class="layui-input-inline inline-1">
                        <input type="text" name="mobile" lay-verify="title" placeholder="请输第三方支付单号" autocomplete="off" class="layui-input">
                    </div>
               </div>
               <div class="layui-inline">
                    <label class="layui-form-label">下单时间：</label>
                    <div class="layui-input-inline inline-1">
                        <input type="text" name="mobile" lay-verify="title" placeholder="开始时间 到 结束时间" autocomplete="off" class="layui-input">
                    </div>
               </div>
               <div class="layui-inline">
                    <label class="layui-form-label">用户手机号码：</label>
                    <div class="layui-input-inline inline-1">
                        <input type="text" name="mobile" lay-verify="title" placeholder="请输入手机号码" autocomplete="off" class="layui-input">
                    </div>
               </div>
               <div class="layui-inline">
                    <label class="layui-form-label">支付状态：</label>
                    <Select class="label-ivu" v-model="model" style="width:100px;">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>                   
               </div>
               <div class="layui-inline">
                    <label class="layui-form-label">单据类型：</label>
                    <Select class="label-ivu" v-model="model1" style="width:100px;">
                        <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>                   
               </div>
                <div class="layui-inline" style="margin-left:20px;">
                    <Button type="error" class="layui-btn"> <Icon  type="ios-search-outline"  size="20"/>&nbsp;筛选</Button>
                </div>
               <div class="layui-inline">
                   <Button type="error" class="layui-btn"><Icon type="ios-cloud-download" size="20" />&nbsp;导出</Button>
               </div>             
           </div>
        </div>
        <div style="background:white; height:300px; border: 1px solid #e6e6e6;">
            <div class="box-top" style="height:250px">
                <Table border ref="selection" :columns="columns4" :data="data1"  width="1050" v-for="item in data1" :key="item.id">
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="error" size="small" style="margin-right: 5px" @click="show(index)">明细</Button>
                </template>
                </Table>
            </div>
            <Page :total="100" show-sizer />
        </div>
    </div>
</template>

<script>
export default {
  data () {
            return {
                data1:[],
                cityList: [
                    {
                        value: '请选择',
                        label: '请选择'
                    },
                    {
                        value: '待支付',
                        label: '待支付'
                    },
                    {
                        value: '支付成功',
                        label: '支付成功'
                    },
                    {
                        value: '其它',
                        label: '其它'
                    }
                ],
                cityList1:[
                    {
                        value: '请选择',
                        label: '请选择'
                    },
                    {
                        value: '订单',
                        label: '订单'
                    },
                    {
                        value: '充值',
                        label: '充值'
                    }

                ],
                model1: '',
                model: '',
                indeterminate: false,
                checkAll: false,
                cityList: [
                    {
                        value: '请选择',
                        label: '请选择'
                    },
                    {
                        value: '带退款',
                        label: '带退款'
                    },
                    {
                        value: '退款成功',
                        label: '退款成功'
                    },
                    {
                        value: '其它',
                        label: '其它'
                    }
                ],
                model1: '',
                    columns4: [
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center'
                    },
                    {
                        title: '支付单号',
                        key: 'ordNumber'
                    },
                    {
                        title: '状态',
                        key: 'orderState'
                    },
                    {
                        title: '支付方式',
                        key: 'orderMethods'
                    },
                    {
                        title: '单据类型',
                        key: 'documentType'
                    },
                    {
                        title: '用户',
                        key: 'orderuse'
                    },
                    {
                        title: '金额',
                        key: 'money'
                    },
                    {
                        title: '第三方支付',
                        key: 'threePlay'
                    },
                    {
                        title: '支付金额',
                        key: 'zhifu'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 100,
                        align: 'center',
                        key: '操作'
                    },
                ],
                // data1: [
                //     {
                //         支付单号: '2557402472',
                //         状态: '已支付',
                //         支付方式: '微信支付',
                //         单据类型: '订单',
                //         用户:'17732121',
                //         金额:'4220.00',
                //         第三方支付:'',
                //         支付金额:'10.00',
                //         操作:''
                //     },
                //     {
                //         支付单号: '2557402473',
                //         状态: '已支付',
                //         支付方式: '支付宝',
                //         单据类型: '订单',
                //         用户:'1567272',
                //         金额:'420.00',
                //         第三方支付:'',
                //         支付金额:'110.00',
                //         操作:''
                //     },
                //     {
                //         支付单号: '2557102474',
                //         状态: '已支付',
                //         支付方式: '微信支付',
                //         单据类型: '订单',
                //         用户:'1983314',
                //         金额:'160.00',
                //         第三方支付:'',
                //         支付金额:'100.00',
                //         操作:''
                //     },
                //     {
                //         支付单号: '2557412475',
                //         状态: '已支付',
                //         支付方式: '微信支付',
                //         单据类型: '订单',
                //         用户:'145723',
                //         金额:'1110.00',
                //         第三方支付:'',
                //         支付金额:'210.00',
                //         操作:''
                //     },
                //     {
                //         支付单号: '2557410476',
                //         状态: '已支付',
                //         支付方式: '微信支付',
                //         单据类型: '订单',
                //         用户:'1684',
                //         金额:'520.00',
                //         第三方支付:'',
                //         支付金额:'120',
                //         操作:''
                //     },
                //     {
                //         支付单号: '2557410247',
                //         状态: '已支付',
                //         支付方式: '微信支付',
                //         单据类型: '订单',
                //         用户:'158957',
                //         金额:'420.00',
                //         第三方支付:'',
                //         支付金额:'224',
                //         操作:''
                //     },
                //     {
                //         支付单号: '2557410248',
                //         状态: '已支付',
                //         支付方式: '微信支付',
                //         单据类型: '订单',
                //         用户:'17777777',
                //         金额:'420.00',
                //         第三方支付:'',
                //         支付金额:'231',
                //         操作:''
                //     },
                // ]             
            }
        },
        methods:{
            show (index) {
                this.$Modal.info({
                    title: '支付单查看',
                    content: `支付单号: ${this.data1[index].ordNumber}<br>状态: ${this.data1[index].orderState}<br>支付方式:   ${this.data1[index].orderMethods}<br>单据类型:  ${this.data1[index].documentType}<br>用户:  ${this.data1[index].orderuse}<br>金额:  ${this.data1[index].money}<br>第三方支付:  ${this.data1[index].threePlay}<br>支付金额:  ${this.data1[index].zhifu}`
                })
            }
        },
        created(){
            fetch('http://10.35.164.18:3000/shopsorder/get').then((res)=>{
                return res.text();
            }).then((res)=>{
                console.log(res);
                this.data1 = JSON.parse(res);
            })
        },
}
</script>

<style scoped>
.box{
    padding:15px;
}
.box .box-top{
    padding:10px 10px 0 10px;
    background:#fff;
    border:1px solid #e6e6e6;
    margin-bottom:10px;
}
.box-top{
    overflow: hidden;
    overflow: auto;
}

.box-top-center{
    margin-bottom:0;
    overflow: hidden;
}
.layui-inline{
    margin-bottom:10px;
    margin-right:5px;
    overflow: hidden;
    display: inline-block;
}
.layui-form-label{
    float:left;
    display:block;
    padding:5px 2px;
    width:116px;
    font-weight:400;
    line-height:20px;
    text-align:right;
}
.layui-inline .inline-1{
    width:150px;
}
.inline-2{
    width:100px;
    float:left;
    margin-right:10px;
}
.layui-inline .inline-1{
    float:left;
    margin-right:10px;
}
.layui-input{
    height:32px;
    line-height: 1.3;
    border-width: 1px;
    border-style: solid;
    background-color: #fff;
    border-radius: 2px;
    display: block;
    width: 100%;
    padding-left: 10px;
    border-color:#e1e1e1;
    box-sizing: border-box;
    outline:none;
}
input::placeholder{
    color:rgb(201, 201, 201);
}
.layui-btn{
    background-color: #FF7159 !important;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 12px;
    border:none;
    margin-right: 5px;  
}
.button1{
    background-color: #FF7159 !important;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 12px;
    border:none;
    margin-right: 5px;
    color:white;
    margin-top:0;
}

.box .center{
    margin: 10px 0;
    border-width: 1px;
    border-style: solid;
    border-color: #e6e6e6;
}
.tablebox{
    border:1px solid #e6e6e6;
}
.tr-1{
    background-color: #f2f2f2;
}
.tr-2{
    background-color: white;
}
.td-01{
    /* width:120px; */
    height: 40px;
    line-height: 28px;
    padding: 0 15px;
    position: relative;
    box-sizing: border-box;
    border:1px solid #e6e6e6;
}
.td-02{
    /* width:50px; */
    height: 40px;
    line-height: 28px;
    padding: 0 15px;
    position: relative;
    box-sizing: border-box;
    border:1px solid #e6e6e6;
}
.ds2{
    border-left:none;
    border-right:none;
}

body{
  font-size:14px;
  background:#f2f2f2;
}
html{
  color: rgb(102, 102, 102);
}


</style>

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
                    <Select class="label-ivu" v-model="model1" style="width:100px;">
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
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button class="button1"><Icon type="ios-cloud-upload-outline" size="20" />&nbsp;导入</Button>
                    </Upload>
               </div>              
           </div>
        </div>
        <div style="background:white; height:300px; border: 1px solid #e6e6e6;">
            <div class="box-top" style="height:250px">
                <Table border ref="selection" :columns="columns4" :data="data1"  width="1050"></Table>
            </div>
            <Page :total="100" show-sizer />
        </div>
    </div>
</template>

<script>
export default {
  data () {
            return {
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
                        key: '支付单号'
                    },
                    {
                        title: '状态',
                        key: '状态'
                    },
                    {
                        title: '支付方式',
                        key: '支付方式'
                    },
                    {
                        title: '单据类型',
                        key: '单据类型'
                    },
                    {
                        title: '用户',
                        key: '用户'
                    },
                    {
                        title: '金额',
                        key: '金额'
                    },
                    {
                        title: '第三方支付',
                        key: '第三方支付'
                    },
                    {
                        title: '支付金额',
                        key: '支付金额'
                    },
                    {
                        title: '操作',
                        key: '操作'
                    },
                ],
                data1: [
                    {
                        支付单号: '25574102472',
                        状态: '已支付',
                        支付方式: '微信支付',
                        单据类型: '订单',
                        用户:'17777777',
                        金额:'420.00',
                        第三方支付:'',
                        支付金额:'2019-04-01',
                        操作:''
                    },
                    {
                        支付单号: '25574102472',
                        状态: '已支付',
                        支付方式: '微信支付',
                        单据类型: '订单',
                        用户:'17777777',
                        金额:'420.00',
                        第三方支付:'',
                        支付金额:'2019-04-01',
                        操作:''
                    },
                    {
                        支付单号: '25574102472',
                        状态: '已支付',
                        支付方式: '微信支付',
                        单据类型: '订单',
                        用户:'17777777',
                        金额:'420.00',
                        第三方支付:'',
                        支付金额:'2019-04-01',
                        操作:''
                    },
                    {
                        支付单号: '25574102472',
                        状态: '已支付',
                        支付方式: '微信支付',
                        单据类型: '订单',
                        用户:'17777777',
                        金额:'420.00',
                        第三方支付:'',
                        支付金额:'2019-04-01',
                        操作:''
                    },
                    {
                        支付单号: '25574102472',
                        状态: '已支付',
                        支付方式: '微信支付',
                        单据类型: '订单',
                        用户:'17777777',
                        金额:'420.00',
                        第三方支付:'',
                        支付金额:'2019-04-01',
                        操作:''
                    },
                    {
                        支付单号: '25574102472',
                        状态: '已支付',
                        支付方式: '微信支付',
                        单据类型: '订单',
                        用户:'17777777',
                        金额:'420.00',
                        第三方支付:'',
                        支付金额:'2019-04-01',
                        操作:''
                    },
                    {
                        支付单号: '25574102472',
                        状态: '已支付',
                        支付方式: '微信支付',
                        单据类型: '订单',
                        用户:'17777777',
                        金额:'420.00',
                        第三方支付:'',
                        支付金额:'2019-04-01',
                        操作:''
                    },
                ]             
            }
        }
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

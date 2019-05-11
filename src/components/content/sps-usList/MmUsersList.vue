<template>
   <div class="box">
       <div class="box-top">
           <div class="box-top-center" id="buttom1_imp" >
               <div class="layui-inline">
                    <label class="layui-form-label">手机号：</label>
                    <div class="layui-input-inline inline-1">
                        <input type="text" name="mobile" lay-verify="title" placeholder="请输入手机号码" autocomplete="off" class="layui-input">
                    </div>
               </div>
               <div class="layui-inline">
                    <label class="layui-form-label">性别：</label>
                    <Select class="label-ivu" v-model="model" style="width:100px;">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>                   
               </div>   
               <div class="layui-inline">
                    <label class="layui-form-label ">昵称：</label>
                    <div class="layui-input-inline inline-2">
                        <input type="text" name="mobile" lay-verify="title" placeholder="用户名称" autocomplete="off" class="layui-input">
                    </div>
               </div> 
               <div class="layui-inline">
                    <label class="layui-form-label">状态：</label>
                    <Select class="label-ivu" v-model="model1" style="width:150px;">
                        <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>                   
               </div>  
               <div class="layui-inline">
                    <label class="layui-form-label">推荐人：</label>
                    <div class="layui-input-inline inline-1">
                        <input type="text" name="mobile" lay-verify="title" placeholder="推荐人手机号" autocomplete="off" class="layui-input">
                    </div>
               </div> 
               <div class="layui-inline">
                   <Button type="error" class="layui-btn"> <Icon  type="ios-search-outline"  size="20"/>&nbsp;筛选</Button>
                   <Button type="error" class="layui-btn"><Icon type="ios-add-circle-outline" size="20" />&nbsp;添加</Button>
               </div>                           
               <div class="layui-inline">
                   <Button type="error" class="layui-btn"><Icon type="ios-cloud-download" size="20" />&nbsp;导出</Button>
               </div>
               <div class="layui-inline">
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button class="button1"><Icon type="ios-cloud-upload-outline" size="20" />&nbsp;导入</Button>
                    </Upload>
               </div>               
           </div>
       </div>
       <div class="box-top">
           <div class="box-center" style="overflow:auto; width:100%; height:256px;">
                <table class="tablebox" width="1300px" align="center" border="1" cellspacing="0" cellpadding="0" >
                    <tr class="tr-1">
                        <td class="td-02"></td>  
                        <td class="td-01 ds2">手机号</td>
                        <td class="td-02">等级</td>
                        <td class="td-02 ds2">性别</td>
                        <td class="td-02">生日</td>
                        <td class="td-02 ds2">头像</td>
                        <td class="td-02">昵称</td>
                        <td class="td-02 ds2">余额</td>
                        <td class="td-02">积分</td>
                        <td class="td-02 ds2">状态</td>
                        <td class="td-02">邀请人</td>
                        <td class="td-01 ds2">创建时间</td>
                        <td class="td-02">操作</td>  
                    </tr>   
                    <tr class="tr-2">
                        <td class="td-02">1</td>  
                        <td class="td-01 ds2">19321221190</td>
                        <td class="td-02">一级</td>
                        <td class="td-02 ds2">男</td>
                        <td class="td-02"></td>
                        <td class="td-02 ds2"></td>
                        <td class="td-02">zza</td>
                        <td class="td-02 ds2">100.0</td>
                        <td class="td-02">29</td>
                        <td class="td-02 ds2">正常</td>
                        <td class="td-01"></td>
                        <td class="td-01 ds2">2019-05-09 16:29:02</td>
                        <td class="td-02"></td>  
                    </tr> 
                    <tr class="tr-2">
                        <td class="td-02">2</td>  
                        <td class="td-01 ds2">19321221190</td>
                        <td class="td-02">一级</td>
                        <td class="td-02 ds2">男</td>
                        <td class="td-02"></td>
                        <td class="td-02 ds2"></td>
                        <td class="td-02">zza</td>
                        <td class="td-02 ds2">100.0</td>
                        <td class="td-02">29</td>
                        <td class="td-02 ds2">正常</td>
                        <td class="td-01"></td>
                        <td class="td-01 ds2">2019-05-09 16:29:02</td>
                        <td class="td-02"></td>  
                    </tr> 
                    <tr class="tr-2">
                        <td class="td-02">3</td>  
                        <td class="td-01 ds2">19321221190</td>
                        <td class="td-02">一级</td>
                        <td class="td-02 ds2">男</td>
                        <td class="td-02"></td>
                        <td class="td-02 ds2"></td>
                        <td class="td-02">zza</td>
                        <td class="td-02 ds2">100.0</td>
                        <td class="td-02">29</td>
                        <td class="td-02 ds2">正常</td>
                        <td class="td-01"></td>
                        <td class="td-01 ds2">2019-05-09 16:29:02</td>
                        <td class="td-02"></td>  
                    </tr> 
                    <tr class="tr-2">
                        <td class="td-02">4</td>  
                        <td class="td-01 ds2">19321221190</td>
                        <td class="td-02">一级</td>
                        <td class="td-02 ds2">男</td>
                        <td class="td-02"></td>
                        <td class="td-02 ds2"></td>
                        <td class="td-02">zza</td>
                        <td class="td-02 ds2">100.0</td>
                        <td class="td-02">29</td>
                        <td class="td-02 ds2">正常</td>
                        <td class="td-01"></td>
                        <td class="td-01 ds2">2019-05-09 16:29:02</td>
                        <td class="td-02"></td>  
                    </tr> 
                    <tr class="tr-2">
                        <td class="td-02">5</td>  
                        <td class="td-01 ds2">19321221190</td>
                        <td class="td-02">一级</td>
                        <td class="td-02 ds2">男</td>
                        <td class="td-02"></td>
                        <td class="td-02 ds2"></td>
                        <td class="td-02">zza</td>
                        <td class="td-02 ds2">100.0</td>
                        <td class="td-02">29</td>
                        <td class="td-02 ds2">正常</td>
                        <td class="td-01"></td>
                        <td class="td-01 ds2">2019-05-09 16:29:02</td>
                        <td class="td-02"></td>  
                    </tr> 
                    <tr class="tr-2">
                        <td class="td-02">5</td>  
                        <td class="td-01 ds2">19321221190</td>
                        <td class="td-02">一级</td>
                        <td class="td-02 ds2">男</td>
                        <td class="td-02"></td>
                        <td class="td-02 ds2"></td>
                        <td class="td-02">zza</td>
                        <td class="td-02 ds2">100.0</td>
                        <td class="td-02">29</td>
                        <td class="td-02 ds2">正常</td>
                        <td class="td-01"></td>
                        <td class="td-01 ds2">2019-05-09 16:29:02</td>
                        <td class="td-02"></td>  
                    </tr> 
                    <tr class="tr-2">
                        <td class="td-02">5</td>  
                        <td class="td-01 ds2">19321221190</td>
                        <td class="td-02">一级</td>
                        <td class="td-02 ds2">男</td>
                        <td class="td-02"></td>
                        <td class="td-02 ds2"></td>
                        <td class="td-02">zza</td>
                        <td class="td-02 ds2">100.0</td>
                        <td class="td-02">29</td>
                        <td class="td-02 ds2">正常</td>
                        <td class="td-01"></td>
                        <td class="td-01 ds2">2019-05-09 16:29:02</td>
                        <td class="td-02"></td>  
                    </tr> 
                    <tr class="tr-2">
                        <td class="td-02">5</td>  
                        <td class="td-01 ds2">19321221190</td>
                        <td class="td-02">一级</td>
                        <td class="td-02 ds2">男</td>
                        <td class="td-02"></td>
                        <td class="td-02 ds2"></td>
                        <td class="td-02">zza</td>
                        <td class="td-02 ds2">100.0</td>
                        <td class="td-02">29</td>
                        <td class="td-02 ds2">正常</td>
                        <td class="td-01"></td>
                        <td class="td-01 ds2">2019-05-09 16:29:02</td>
                        <td class="td-02"></td>  
                    </tr> 
                </table>
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
                        value: '男',
                        label: '男'
                    },
                    {
                        value: '女',
                        label: '女'
                    }
                ],
                cityList1: [
                    {
                        value: '请选择',
                        label: '请选择'
                    },
                    {
                        value: '正常',
                        label: '正常'
                    },
                    {
                        value: '停用',
                        label: '停用'
                    }
                ],
                model1: '',
                model: ''              
            }
        }
}
</script>

<style scoped>
.box{
    padding:15px 15px;
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
    width:70px;
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
    width:200px;
    height: 40px;
    line-height: 28px;
    padding: 0 15px;
    position: relative;
    box-sizing: border-box;
        border:1px solid #e6e6e6;
}

.td-02{
    height: 40px;
    line-height: 28px;
    padding: 0 15px;
    position: relative;
    box-sizing: border-box;
    width:80PX;
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
<template>
    <div class="message">
      <div class="wei-third">
          <!-- 最上面 -->
         <form class="third-form">
            <div class="form-left">
                <span>消息名称：</span>
                <input type="text" placeholder="请输入品牌名称关键字" v-model="names">
            </div>
            <div class="form-center">
                <span>消息类型：</span>
                <input type="text" placeholder="请输入消息类型" v-model="types">
            </div>
            <div class="form-right">
                <span>信息筛选：</span>
                <input type="text" placeholder="请输入筛选条件">
                <Button type="error" icon="ios-add-circle-outline" @click="f1">添加</Button>
            </div>
         </form>
         <!-- 增删改查表单 -->
         <div class="third-content">
             <div class="third-table">
                 <!-- table最上面 -->
                 <div class="table-top">
                    <table class="table1">
                        <tr class="table1-tr">
                            <td>编号</td>
                            <td>消息名称</td>
                            <td>消息类型</td>
                            <td>关注回复</td>
                            <td>默认回复</td>
                            <td>禁用</td>
                            <td>更新时间</td>
                            <td>操作</td>
                        </tr>
                    </table>
                 </div>
                  <!-- 内容部分 -->
                  <div class="table-content">
                     <div class="table-center">
                         <table class="table2">
                            <tr class="table1-tr1" v-for="(item,id) in list" :key="id.num">
                                <td>{{item.num}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.type}}</td>
                                <td>{{item.hui1}}</td>
                                <td>{{item.hui2}}</td>
                                <td>{{item.hui3}}</td>
                                <td>2019-03-26</td>
                                <td class="finaltd">
                                    <Button type="error">编辑</Button>
                                    <Button type="info" v-on:click="dele(id.num)">删除</Button>
                                </td>
                            </tr>
                    </table>
                     </div>
                  </div>
                   <!-- 底栏部分 -->
                  <div class="table-bottom">
                          <Page :total="40" size="small" show-elevator show-sizer />
                  </div>
             </div>
         </div>

      </div>
      <!-- 圣杯布局 -->
      <div class="sheng-third">
          吉海科技 © jihainet.com - 版权所有 问题请求|产品建议请上吉海论坛 《使用手册》
      </div>
    </div>
</template>

<script>
export default {
name:'message',
data(){
    return{
        list:[
            {num:1,name:'规划图',type:'图文类型',hui1:"是",hui2:"是",hui3:'是',time:new Date()}
        ],
        names:"",
        types:"",
        num:2,
        shaixuan:""
    }
},
methods:{
 f1(){
  var mydata={num:this.num++,name:this.names,type:this.types,hui1:"是",hui2:"是",hui3:'是'}
  if(this.names==""||this.types==""){
      alert("请输入内容,文本框输入内容不能为空")
  }else{
      this.list.push(mydata)
      this.names=""
  }
  
 },
 dele(index){
    var r=confirm("你确认要删除吗？");
    if(r==true){
      this.list.splice(index,1)
    }else{
        return
    }
     
 }
},
mounted(){

}
}
</script>

<style scoped>
.message{
    width:100%;
    position: relative;
}
.sheng-third{
    width:100%;
    height:45px;
    position: fixed;
    bottom:0px;
    background-color: rgb(179, 176, 176);
    text-align: center;
    line-height: 45px;
}
/* 最上面 */
.wei-third{
    width:100%;
    background-color: white;
    padding:15px;
    height:249px;
    box-sizing:border-box;
}
.third-form{
    width:100%;
    height:50px;
    box-sizing:border-box;
    padding:10px 10px 0px;
    display:flex;
    border:1px solid  #e6e6e6;
}
.third-form input {
    height:30px;
    padding-left:5px;
}
.form-left{
flex:1;
}
.form-right{
flex:1;
}
.form-right input{
    margin-right:20px;
}
.form-center{
flex:1;
}
.thirdbutton1{
    margin-right:5px;
}
/* 表格 */
.third-content{
    margin-top:15px;
    width:100%;
    height:153px;
    padding:10px 0px;
    background-color:white;
    box-sizing:border-box;
}
.third-table{
    width:100%;
    height:223px;
    display:flex;
    flex-direction:column; 
    background-color:white;
    border:0.3px solid rgb(231, 229, 229);
}
.table-top{
    width:100%;
    box-sizing:border-box;
    flex-basis:20%; 
    
}
.table1{
    display:flex;
}
.table1-tr{
    display:flex;
    width:100%;
    line-height:36px; 
    justify-content:space-around;
    background-color:rgb(226, 224, 224);
}
/* 表格底部 */
.table-bottom{
    width:100%;
    flex-basis:20%;
    padding-top:7px;
    box-sizing: border-box;
    background-color: white;
}
.table-content{
    width:100%;
    flex-basis:60%;
    overflow-y:scroll;
    
}
.table-center{
    width:100%;
    height:500px;
}
/* 表格内容 */
.table2{
      display:flex;
      flex-direction: column; 
}
.table1-tr1{
    display:flex;
    width:100%;
    line-height:36px; 
    justify-content:space-around;
}
.table1-tr1 td{
    text-align:center;
    flex:1; 
}
</style>

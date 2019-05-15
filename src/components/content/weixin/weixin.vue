<template>
<div class="shengbei">
    <div class="weixin">
       <div class="first-top">
           <p>1、请先添加菜单->保存，确定无误后，再点击发布菜单。</p>
           <p>2、请注意添加IP白名单，点击登录<span class="span1"><a href="https://mp.weixin.qq.com/">微信公众平台</a></span>，进入微信公众号，基本配置->IP白名单 点击修改配置即可。</p>
           <p>3、菜单名称长度请勿超过5个字。</p>
       </div>
       <!-- 大的内容部分 -->
       <div class="first-content">
          <div class="content-wai"> 
           <div class="first-content-left">
               <!-- 上 -->
               <img src="../../../assets/weixinhead.jpg" class="img1">
               <!-- 中 -->
               <div class="first-content-left-middle"></div>
               <!-- 下 -->
               <div class="first-content-left-bottom">
                   <div class="button1" >
                     <Icon type="ios-add-circle-outline" size="30"/>
                   </div>
                   <div class="button2" @click="f1">
                     <Icon type="ios-add" size='24' class="icon2"/>
                   </div>
               </div>
           </div>
           <!-- 右边 -->
           <div class="first-content-right" v-if="show">
               <div class="first-right-top">
                   <span></span>
                   <span>菜单名称</span>
                   <span style="cursor:pointer">
                       <Button @click="warning" class="delete">删除</Button>
                   </span>
               </div>
           </div>
          </div>
          <!-- 下面的部分 -->
        <div class="first-bottom">
                <Button type="error" size="large">发布菜单</Button>
        </div>
       </div>
    </div>
    <!-- 圣杯底栏 -->
    <div class="sheng-bottom">
        吉海科技 © jihainet.com - 版权所有 问题请求|产品建议请上吉海论坛 《使用手册》
    </div>
</div>
</template>

<script>
export default {
name:"weixin",
data(){
    return{
     show:false
    }
},
methods:{
      f1:function(){
        this.show=!this.show
      },
     warning(){
                this.$Message.warning('您还没有删除权限');
                this.$Message.config({
                                        top:50,
                                        duration:3
                                    });
            }
       }
}
</script>

<style scoped>
.shengbei{
    width:100%;
    position: relative;
}
.weixin{
    width:100%;
    padding:15px;
    box-sizing:border-box;
    background-color: white;
}
.sheng-bottom{
    width:100%;
    height:44px;
    background-color: rgb(202, 200, 200);
    position:fixed;
    bottom:0px;
    text-align: center;
    line-height: 44px;
}
.delete{
    height:25px;
    line-height:15px; 
}
.first-top{
    width:100%;
    padding:10px;
     border: 1px solid #FFFF33;
    background-color:#FFFFCC; 
    box-sizing:10px;
    height:74px;
}
.span1{
    color:green;
}
.first-content{
    width:100%;
    padding:10px;
    display:flex;
    flex-direction: column;
    box-sizing:border-box;
    background-color:white;
    margin-top:10px;
    border:0.5px solid grey;
}
.content-wai{
    width:100%;
    display:flex;
}
/* 左微信 */
.first-content-left{
width:340px;
display:flex;
flex-direction: column;
height:600px;
}
.img1{
    width:100%;
    display:block;
    flex-basis:10%;
}
.first-content-left-middle{
    width:100%;
    flex-basis:83%;
    box-sizing:border-box;
    background-color: rgb(226, 225, 225);
}
.first-content-left-bottom{
    width:100%;
    flex-basis:7%;
    border:0.5px solid rgb(196, 196, 196);
    border-top:none;
    box-sizing:border-box;
}
/* 下 */
.first-content-left-bottom{
    display:flex;
    align-items:center;
    background-color:white;
}
.button1{
    flex-basis:15%;
    height:100%;
    line-height: 42px;
    text-align: center;
    color:grey;
}
.button2{
    border-left:0.5px solid rgb(138, 136, 136);
    line-height: 42px;
    height:100%;
    flex-basis:85%;
    text-align: center;
}
/* 右边显示框 */
.first-content-right{
    width:548px;
    height:598px;
    background-color:white;
    margin-left:20px;
    border:0.5px solid rgb(199, 198, 198);
    box-sizing:border-box;
}
.first-right-top{
    width:100%;
    padding:8px;
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
    height:37px;
    background-color: rgb(212, 211, 211);
}
.first-right-top span:nth-child(3){
    color:green;
}
/* 下面的部分 */
.first-bottom{
    width:100%;
    height:48px;
    padding-top:10px;
    margin-bottom:10px;
    text-align:center;
}
</style>

<!--  -->
<template>
<div class="colmd">
    <spsCard class="spsCard_1">
        <span class="iconfont icon-laba icon"></span>
          <p>版本信息</p>
     </spsCard>
      <div class="colmd_2">
         <table class="tab">
           <tr :key="index" :class="{on:index%2==0,off:index%2!=0}">
             <td>产品名称</td>
             <td>Jshop-b2c标准版</td>
           </tr>
            <tr>
             <td>当前版本</td>
             <td>v2.0.3 <a href="#"><span class="log">更新日志</span></a></td>
           </tr>
            <tr>
             <td>是否授权</td>
             <td><a href="#"><span class="accredit">已授权</span></a></td>
           </tr>
            <tr>
             <td>产品授权</td>
             <td> <i-Button type="error">下载更新</i-Button></td>
           </tr>


         </table>
     </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import spsCard from "./sps-card"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  spsCard
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
//有数据，没有真实DOM
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
//模板编译完毕，数据也挂载完毕
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, // 模板编译(template)数据挂载之前执行的钩子函数
beforeUpdate() {},  //data里的值改变了，但还没渲染到html上去
updated() {}, //组件更新之后执行的函数,更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.icon-laba{
  font-size:20px;
}
.spsCard_1{
  margin-bottom: 10px;
}
.spsCard_1 p{
  color: #333;
  font-size: 14px;
}
.colmd{
  width:320px;
  /* height: 205px; */
  height: auto;
  overflow: hidden;
  background-color: white;
}
.colmd_2{
  /* display:flex;
  justify-content:space-around; */
  /* margin-bottom: 20px; */
  margin: 0 50px 20px;
}
.tab{
  border: 1px solid #666;
   border-collapse: collapse;
      /* line-height: 22px; */
    font-size: 14px;
    /* color: #666; */
}
.tab td{
  border: 1px solid #666;
  /* border-collapse: collapse; */
  width: 200px;
  height: 50px;
  text-align: center;
}
.log{
  color: #01AAED;
}
.accredit{
  color:green;
}
 /* .on {
       background: #ccc;
       border: 1px solid #999;
      }

 .off {
     background: #999;
       border: 1px solid #999;
    } */
 tr:hover{
        background-color: #ccc;
        }
</style>

<!--  -->
<template>
<div class="colmd">
   <spsCard class="spsCard_1">
        <span class="iconfont icon-todo-list"></span>
          <p>待办事项</p>
     </spsCard>
     <div class="colmd_2">
         <div class="backlog">
              <h3>待支付</h3>
              <p>208</p>
         </div>
          <div class="backlog">
              <h3>待发货</h3>
              <p>593</p>
         </div>

     </div>
      <div class="colmd_2">
         <div class="backlog">
            <h3>待售后</h3>
              <p>66</p>
         </div>
          <div class="backlog">
             <h3>库存报警</h3>
              <p>1</p>
         </div>


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
   spsCard,
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
.spsCard_1{
  margin-bottom: 10px;
}
.spsCard_1 p{
  font-size: 14px;
  color: #333;
}
.colmd{
  width:320px;
  /* height: 205px; */
  height: auto;
  overflow: hidden;
  background-color: white;
}
.colmd_2{
  display:flex;
  justify-content:space-around;
  /* margin-bottom: 20px; */
  margin: 0 10px 20px;
}
.iconfont{
  font-size: 25px;
}
.backlog{
  width: 140px;
  /* height: 80px; */
    /* display: block; */
    /* padding: 10px 15px; */
    background-color: #f8f8f8;
    color: #999;
    border-radius: 10px;
    /* text-align: center; */
}
.backlog h3{
  font-size: 12px;
  padding: 10px 0 10px 10px;
  font-weight: 400;
}
.backlog p{
   padding: 0 0 10px 10px;
   /* margin-bottom: 10px; */
    font-size: 30px;
    /* font-weight: 300; */
    color: #009688;
}
</style>

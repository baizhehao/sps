<!--  -->
<template>
<div class="colmd">
     <spsCard class="spsCard_1">
        <span class="iconfont icon-shou"></span>
          <p>快捷操作</p>
     </spsCard>
     <div class="colmd_2">
          <div class="colmd1">
            <sapn class="iconfont icon-shangpin icon"></sapn>
            <p>商品</p>
          </div>
           <div class="colmd1">
            <sapn class="iconfont icon-dd icon"></sapn>
            <p>订单</p>
          </div>
           <div class="colmd1">
            <sapn class="iconfont icon-huiyuan21 icon"></sapn>
            <p>会员</p>
          </div>
           <div class="colmd1">
            <sapn class="iconfont icon-laba icon"></sapn>
            <p>公告</p>
          </div>

     </div>
      <div class="colmd_2">
          <div class="colmd1">
            <sapn class="iconfont icon-cuxiao icon"></sapn>
            <p>促销</p>
          </div>
           <div class="colmd1">
            <sapn class="iconfont icon-peisong icon"></sapn>
            <p>配送</p>
          </div>
           <div class="colmd1">
            <sapn class="iconfont icon-zhifufangshi icon"></sapn>
            <p>支付方式</p>
          </div>
           <div class="colmd1">
            <sapn class="iconfont icon-dianpushezhi icon"></sapn>
            <p>店铺设置</p>
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
  display:flex;
  justify-content:space-around;
  /* margin-bottom: 20px; */
  margin: 0 10px 20px;
}
.colmd1{
  float: left;
}
.colmd1 p{
  width:70px;
  color: #666;
  font-size: 14px;
  text-align: center;
}
.icon{
  display: inline-block;
  width: 70px;
  line-height: 70px;
  text-align: center;
  background-color: #F8F8F8;
  font-size: 25px;
}
</style>

<!--  -->
<template>
<div class="top">
      <colmd class="box"></colmd>
      <colmdSecond  class="box"></colmdSecond>
       <!-- <colmdSecond  class="box"></colmdSecond> -->
       <thirly  class="box"></thirly>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import colmd from "./sps-colmd-first"
import colmdSecond from "./sps-colmd-second"
import thirly from "./sps-colmd-thirly"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  colmd,colmdSecond,thirly
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
.top{
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.box{
  width: 33.33%;
}
</style>

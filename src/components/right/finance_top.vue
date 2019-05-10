<!--  -->
<template>
<div class="box">
   <div class="sel">
    <!-- <div class="text">
       <div class="t">
          <span class="sp">优惠券名称:</span>
       </div>
      <i-input class="int" type="text" :autosize="true" placeholder="请输入优惠券名称"></i-input>
    </div> -->

     <div class="text">
       <div class="t">
          <span class="sp">粒度:</span>
       </div>
             <i-select   class="start">
        <i-option value="hour" label="小时" selected>
            <span>小时</span>
            <span style="float:right;color:#ccc">hour</span>
        </i-option>
        <i-option value="day" label="天">
            <span>天</span>
            <span style="float:right;color:#ccc">day</span>
        </i-option>
    </i-select>
    </div>


    <div class="text">
       <div class="t">
          <span class="sp">时间范围:</span>
       </div>
    <i-col class="time" span="12">
            <Date-picker type="daterange" placement="bottom-end" placeholder="2019-05-10 到 2019-05-10" style="width: 200px"></Date-picker>
        </i-col>
    </div>

   </div>


    <div class="btn">
       <i-button class="btn1" type="error">
        <span class="iconfont">&#xe680;</span>
         确定
         </i-button>
        <i-button type="error">今日</i-button>
        <i-button type="error">昨日</i-button>
        <i-button type="error">本周</i-button>
        <i-button type="error">上周</i-button>
        <i-button type="error">本月</i-button>
        <i-button type="error">本月</i-button>
        <i-button type="error">7日内</i-button>
        <i-button type="error">一月内</i-button>
        <i-button type="error">三月内</i-button>
        <i-button type="error">半年内</i-button>
        <i-button type="error">一年内</i-button>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
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
.box{
  width: 97%;
  height: 100px;
  background-color: white;
  border: 1px solid #e6e6e6;
  margin: 15px;
}
.sel{
   width: 1000px;
   height: 50px;
}
.t{
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  /* display: inline-block; */
  float: left;
  margin:10px -8px;

}
.text{
  width: 250px;
  /* display: inline-block; */
  float: left;
}
.int{
  float:left;
  width: 150px;
  margin-top: 10px;
  outline: none;
}
.start{
  width: 120px;
  margin-top: 10px;
}
.time{
  width: 100px;
  margin-top: 10px;
}
.btn{
  margin:0 10px;
}
.btn1{
    margin-right: 10px;
}

</style>

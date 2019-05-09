<!--  -->
<template>
<div class="col">
     <spsCard class="Card">
      <span class="iconfont icon-huiyuan21"></span>
          <p>会员统计</p>
   </spsCard>
    <div id="main2"></div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import spsCard from "./sps-card";
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
   var myChart = this.$echarts.init(document.getElementById('main2'));
  var option = {
    title: {
        text: '',
        textStyle:{
            fontSize:"16",
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['新增记录','活跃记录'],
        textStyle:{
          marginLeft:20,
        }
    },
    grid: {
        left: '10%',
        right: '20%',
        bottom: '5%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['03日','04日','05日','06日','07日','08日','09日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'新增记录',
            type:'line',
            stack: '总量',
            data:[0, 0, 0, 0, 0, 0, 0]
        },
        {
            name:'活跃记录',
            type:'line',
            stack: '总量',
            data:[75, 182, 131, 184, 237, 130, 310]
        },

    ]
};
    myChart.setOption(option);

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
.col{
   width:42%;
  height: 342px;
  background-color: white;
  /* overflow: hidden; */
   /* margin-bottom: 10px; */
}
.Card{
  margin-bottom: 10px;
}
#main2{
  width: 500px;
  height: 300px;
  padding-bottom: 10px;
}
</style>

<!--  -->
<template>
<div class="col">
   <spsCard class="Card">
      <span class="iconfont icon-dd"></span>
          <p>订单统计</p>
   </spsCard>
   <div id="main"></div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import spsCard from "./sps-card";
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
  var myChart = this.$echarts.init(document.getElementById('main'));
  var option = {
    title: {
        text: '最近7天量统计',
        textStyle:{
            fontSize:"16",
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['已支付','已发货'],
        textStyle:{
          marginLeft:20,
        }
    },
    grid: {
        left: '10%',
        right: '10%',
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
            name:'已支付',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'已发货',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
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
  width:48%;
  height: 342px;
  background-color: white;
  overflow: hidden;
   /* margin-bottom: 10px; */
}
.Card{
  margin-bottom: 10px;
}
#main{
  background-color: white;
  width: 500px;
  height: 300px;
  padding-bottom: 10px;
}
</style>

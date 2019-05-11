<!--  -->
<template>
<div>
  <div id="main"></div>
   <Table class="tab" border :columns="columns5" :data="data5"></Table>
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
  columns5: [
                    {
                        title: '日期',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '收款单',
                        key: 'name'
                    },
                    {
                        title: '订单收款',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '订单退款',
                        key: 'address'
                    },
                    {
                        title: '充值',
                        key: 'recharge'
                    },
                    {
                        title: '提现',
                        key: 'tixian'
                    }
                ],
                data5: [
                    {
                        name: 120,
                        age: 220,
                        address:150,
                        date: '周一',
                        recharge:320,
                        tixian:820
                    },
                    {
                        name: 132,
                        age: 182,
                        address: 232,
                        date: '周二',
                         recharge:332,
                        tixian:932
                    },
                    {
                        name: 101,
                        age: 191,
                        address: 201,
                        date: '周三',
                         recharge:301,
                        tixian:901
                    },
                    {
                        name:134 ,
                        age: 234,
                        address:154 ,
                        date: '周四',
                         recharge:334,
                        tixian:934
                    },
                    {
                        name: 90,
                        age:290,
                        address:190,
                        date: '周五',
                         recharge:390,
                        tixian:1290
                    },
                    {
                        name: 230,
                        age:330,
                        address: 330,
                        date: '周六',
                         recharge:330,
                        tixian:1330
                    },
                    {
                        name: 210,
                        age:310,
                        address:410,
                        date: '周天',
                         recharge:320,
                        tixian:1320
                    }
                ]


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
        text: '财务统计'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['收款单','订单收款','订单退款','充值','提现']
    },
    grid: {
        left: '15%',
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
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'收款单',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'订单收款',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'订单退款',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'充值',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'提现',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
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
#main{
  background-color: white;
  width:97%;
  height: 400px;
  margin:15px;
  /* padding-bottom: 10px; */
}
.tab{
  width: 97%;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>

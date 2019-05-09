<!--  -->
<template>
<div class="colmd">
     <spsCard class="spsCard_1">
        <span class="iconfont icon-dd icon"></span>
          <p>最近登陆</p>
     </spsCard>
     <div class="a">
       <Table border :columns="columns1" :data="data1"></Table>
     </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import spsCard from "./sps-card"
 export default {
   components: {
    spsCard
   },
        data () {
            return {
                 columns1: [
                    {
                        title: '状态',
                        key: 'name'
                    },
                    {
                        title: '记录时间',
                        key: 'age'
                    },
                    {
                        title: '登录IP',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '登录',
                        age:"2019-05-09 13:56:51",
                        address: '223.255.14.236',
                        date: '2016-10-03'
                    },
                    {
                        name: '登录',
                        age:"2019-05-09 13:48:00",
                        address: '114.64.253.130',
                        date: '2016-10-01'
                    },
                    {
                        name: '登录',
                        age: "2019-05-09 13:47:22",
                        address: '223.255.14.236',
                        date: '2016-10-02'
                    },
                    {
                        name: '登录',
                        age:"2019-05-09 13:44:28",
                        address: '125.46.20.202',
                        date: '2016-10-04'
                    },
                    {
                        name: '登录',
                        age:"2019-05-09 13:33:56",
                        address: '39.75.15.142',
                        date: '2016-10-04'
                    },
                    {
                        name: '登录',
                        age:"2019-05-09 12:27:35",
                        address: '113.161.39.150',
                        date: '2016-10-04'
                    }
                ]
            }
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
spsCard_1{
  background-color: white;
  overflow: hidden;
      width: 300px;
    height: 42px;
}
.icon-dd{
  font-size:20px;
}
.colmd{
  width:42%;
  /* height: 205px; */
  height: auto;
  overflow: hidden;
  /* background-color: white; */
}

</style>

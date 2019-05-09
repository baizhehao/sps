<!--  -->
<template>
<div  class="colmd">
    <spsCard class="spsCard_1">
        <span class="iconfont icon-dd icon"></span>
          <p>操作日志</p>
     </spsCard>
  <div  class="a">
         <Table border :columns="columns5" :data="data5"></Table>
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
  columns5: [
                    {
                        title: '操作员',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '操作时间',
                        key: 'name'
                    },
                    {
                        title: '操作内容',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '操作IP',
                        key: 'address'
                    }
                ],
                data5: [
                    {
                        name: '2019-05-09',
                        age:'生成多规格',
                        address: '110.87.159.77',
                        date: '温浩然'
                    },
                    {
                        name: '2019-05-09 ',
                        age: '生成多规格',
                        address: '183.230.164.56',
                        date: '贺梦萍'
                    },
                    {
                        name: '2019-05-09 ',
                        age:'生成多规格',
                        address: '183.230.164.56',
                        date: '老白'
                    },
                    {
                        name: '2019-05-09 ',
                        age: '生成多规格',
                        address: '183.230.164.56',
                        date: '老唐'
                    },
                    {
                        name: '2019-05-09 ',
                        age:'生成多规格',
                        address: '183.230.164.56',
                        date: '张三'
                    },
                    {
                        name: '2019-05-09 ',
                        age: '生成多规格',
                        address: '110.87.159.77',
                        date: '李四'
                    },
                    {
                        name: '2019-05-09 ',
                        age: '生成多规格',
                        address: '110.87.159.77',
                        date: '李四'
                    },
                    {
                        name: '2019-05-09 ',
                        age: '生成多规格',
                        address: '110.87.159.77',
                        date: '李四'
                    },
                    {
                        name: '2019-05-09 ',
                        age: '生成多规格',
                        address: '110.87.159.77',
                        date: '李四'
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
.icon-dd{
  font-size:20px;
}
.colmd{
  width:42%;
  /* height: 205px; */
  height: auto;
  /* overflow: hidden; */
  background-color: white;
}
</style>

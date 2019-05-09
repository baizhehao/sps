<!--  -->
<template>
<div>
  <Table border :columns="columns7" :data="data6">
    <Switch size="large">
              <span slot="open">开启</span>
                <span slot="close">关闭</span>
             </Switch>
  </Table>

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
          columns7: [
                    {
                        title: 'ID',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '优惠券名称',
                        key: 'age'
                    },
                    {
                        title: '权重',
                        key: 'weight'
                    },
                    {
                        title: '启用状态',
                        key: 'start'
                    },

                    {
                        title: '开始时间',
                        key: 'address'
                    },

                    {
                        title: '结束时间',
                        key: 'address2'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '1',
                        age:  '满300减30',
                        address: '2019-05-01 00:00:00',
                        address2:'2020-05-01 00:00:00',
                        weight:100,
                        start:'',
                    },
                    {
                        name: '2',
                        age:  '满300减30',
                        address: '2019-05-01 00:00:00',
                        address2:'2020-05-01 00:00:00',
                         weight:200,
                    },
                    {
                        name: '3',
                        age: '满300减30',
                        address: '2019-05-01 00:00:00',
                        address2:'2020-05-01 00:00:00',
                         weight:300,
                    },
                    {
                        name: '4',
                        age: '满300减30',
                        address: '2019-05-01 00:00:00',
                        address2:'2020-05-01 00:00:00',
                         weight:400,
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
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
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

</style>

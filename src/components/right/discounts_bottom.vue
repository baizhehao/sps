<!--  -->
<template>
<div>
  <!-- <Table border :columns="columns7" :data="data6">
    <Switch size="large">
              <span slot="open">开启</span>
                <span slot="close">关闭</span>
             </Switch>
  </Table> -->
<Table :columns="historyColumns" :data="historyData"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
</div>
</template>

<script>
let testData = {
        "histories": [

            {
                 "username": "001",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "002",
                "shenpistatus": "满500减130",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "003",
                "shenpistatus": "满800减120",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "004",
                "shenpistatus": "满1000减150",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "005",
                "shenpistatus": "满1200减180",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "006",
                "shenpistatus": "满1500减200",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "007",
                "shenpistatus": "满1700减220",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "008",
                "shenpistatus": "满2000减300",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "009",
                "shenpistatus": "满2200减330",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "010",
                "shenpistatus": "满2500减350",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "011",
                "shenpistatus": "满2800减400",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "012",
                "shenpistatus": "满3000减420",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "013",
                "shenpistatus": "满3500减450",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-20 18:05",
                 "operate":""
            },
             {
                "username": "014",
                "shenpistatus": "满4000减500",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "015",
                "shenpistatus": "满4500减700",
                "shenpicomments": "2017-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":""
            },
            {
                 "username": "016",
                "shenpistatus": "满5000减900",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "017",
                "shenpistatus": "满5500减1200",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "018",
                "shenpistatus": "满6000减1400",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "019",
                "shenpistatus": "满6500减1600",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "020",
                "shenpistatus": "满7000减1800",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "021",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "022",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "023",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "024",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "025",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "026",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "027",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "028",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "029",
                "shenpistatus": "满500减100",
                "shenpicomments": "2017-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":""
            },
            {
                 "username": "030",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "031",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "032",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "033",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "034",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "035",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "036",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                 "username": "037",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "038",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "039",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            },
            {
                "username": "040",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23",
                 "operate":"删除"
            }

        ]
    }
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
          // columns7: [
          //           {
          //               title: 'ID',
          //               key: 'name',
          //               render: (h, params) => {
          //                   return h('div', [
          //                       h('Icon', {
          //                           props: {
          //                               type: 'person'
          //                           }
          //                       }),
          //                       h('strong', params.row.name)
          //                   ]);
          //               }
          //           },
          //           {
          //               title: '优惠券名称',
          //               key: 'age'
          //           },
          //           {
          //               title: '权重',
          //               key: 'weight'
          //           },
          //           {
          //               title: '启用状态',
          //               key: 'start'
          //           },

          //           {
          //               title: '开始时间',
          //               key: 'address'
          //           },

          //           {
          //               title: '结束时间',
          //               key: 'address2'
          //           },
          //           {
          //               title: '操作',
          //               key: 'action',
          //               width: 150,
          //               align: 'center',
          //               render: (h, params) => {
          //                   return h('div', [
          //                       h('Button', {
          //                           props: {
          //                               type: 'primary',
          //                               size: 'small'
          //                           },
          //                           style: {
          //                               marginRight: '5px'
          //                           },
          //                           on: {
          //                               click: () => {
          //                                   this.show(params.index)
          //                               }
          //                           }
          //                       }, '编辑'),
          //                       h('Button', {
          //                           props: {
          //                               type: 'error',
          //                               size: 'small'
          //                           },
          //                           on: {
          //                               click: () => {
          //                                   this.remove(params.index)
          //                               }
          //                           }
          //                       }, '删除')
          //                   ]);
          //               }
          //           }
          //       ],
          //       data6: [
          //           {
          //               name: '1',
          //               age:  '满300减30',
          //               address: '2019-05-01 00:00:00',
          //               address2:'2020-05-01 00:00:00',
          //               weight:100,
          //               start:'',
          //           },
          //           {
          //               name: '2',
          //               age:  '满500减100',
          //               address: '2019-05-01 00:00:00',
          //               address2:'2020-05-01 00:00:00',
          //                weight:200,
          //           },
          //           {
          //               name: '3',
          //               age: '满1000减300',
          //               address: '2019-05-01 00:00:00',
          //               address2:'2020-05-01 00:00:00',
          //                weight:300,
          //           },
          //           {
          //               name: '4',
          //               age: '满2000减500',
          //               address: '2019-05-01 00:00:00',
          //               address2:'2020-05-01 00:00:00',
          //                weight:400,
          //           }
          //       ]



          ajaxHistoryData:[],
                // 初始化信息总条数
                dataCount:0,
                // 每页显示多少条
                pageSize:5,
                historyColumns: [
                    {
                        title: 'ID',
                        key: 'username'
                    },
                    {
                        title: '优惠券名称',
                        key: 'shenpistatus'
                    },
                    {
                        title: '开始时间',
                        key: 'shenpicomments'
                    },
                    {
                        title: '结束时间',
                        key: 'time'
                    },
                    {
                        title: '操作',
                        key: 'operate'
                    }

                ],
                historyData: []
            }

},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
            // show (index) {
            //     this.$Modal.info({
            //         title: 'User Info',
            //         content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            //     })
            // },
            // remove (index) {
            //     this.data6.splice(index, 1);
            // }


            // 获取历史记录信息
            handleListApproveHistory(){

                // 保存取到的所有数据
                this.ajaxHistoryData = testData.histories
                this.dataCount = testData.histories.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if(testData.histories.length < this.pageSize){
                    this.historyData = this.ajaxHistoryData;
                }else{
                    this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                }


            },
            changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
            }
},
//生命周期 - 创建完成（可以访问当前this实例）
//有数据，没有真实DOM
created() {
              this.handleListApproveHistory();
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

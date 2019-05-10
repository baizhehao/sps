<!--  -->
<template>
<div class="tab">

<Table :columns="historyColumns" :data="historyData"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
</div>
</template>

<script>
let testData = {
        "histories": [

            {
                 "username": "001",
                "shenpistatus": "满100减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "002",
                "shenpistatus": "满400减130",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "003",
                "shenpistatus": "满800减120",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "004",
                "shenpistatus": "满1000减150",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "005",
                "shenpistatus": "满1200减180",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "006",
                "shenpistatus": "满1500减200",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "007",
                "shenpistatus": "满1700减220",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "008",
                "shenpistatus": "满2000减300",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "009",
                "shenpistatus": "满2200减330",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "010",
                "shenpistatus": "满2500减350",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "011",
                "shenpistatus": "满2800减400",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "012",
                "shenpistatus": "满3000减420",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "013",
                "shenpistatus": "满3500减450",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-20 18:05"

            },
             {
                "username": "014",
                "shenpistatus": "满4000减500",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "015",
                "shenpistatus": "满4500减700",
                "shenpicomments": "2017-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "016",
                "shenpistatus": "满5000减900",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "017",
                "shenpistatus": "满5500减1200",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "018",
                "shenpistatus": "满6000减1400",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "019",
                "shenpistatus": "满6500减1600",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "020",
                "shenpistatus": "满7000减1800",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "021",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "022",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "023",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "024",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "025",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "026",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "027",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "028",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "029",
                "shenpistatus": "满500减100",
                "shenpicomments": "2017-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "030",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "031",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "032",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "033",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "034",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "035",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "036",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                 "username": "037",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "038",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "039",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "040",
                "shenpistatus": "满300减30",
                "shenpicomments": "2016-07-21 14:23",
                "time": "2017-07-21 14:23"
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
                        title: '启用状态',
                        key: 'qiyong',
                        // width:100,
                        align:'center',
                        render:(h,params) => {
                         return h('i-switch',{
                           props:{
                             size:'large',
                             value:params.row.commodityStatus
                           },
                           scopedSlots:{
                             open:()=>h('span','启用'),
                             close:()=>h('span','禁用')
                           },
                           on:{
                             'on-change':(value)=>{
                               console.log(value);
                               this.sayHello();
                             }
                           }
                         })
                        }

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
                        key: 'action',
                        width: 150,
                        render: (h, params) => {
                         return h('div', [
                                h('Button',{
                              props: {
                                type: 'primary',
                                size: 'small'
                              },
                              style: {
                                  marginRight: '5px'
                                  },
                            on: {
                              click: () => {
                                          this.editBus(params.row.params.index)
                                         }
                                 }
                          },'编辑'),
                          h('Button',{
                          props: {
                             type: 'error',
                             size: 'small'
                             },
                             on: {
                               click: () => {
                               this.remove(params.index)
                                  }
                                }
                        },'删除')
                        ])
                  }
               }],
                historyData: []
            }

},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
             remove(index) {
                        this.historyData.splice(index, 1)
                        },

    editBus(item, index) {
                this.handleModal = true
                this.modalTitle = '修改'
                this.itemIndex = index
                this.formValidate = JSON.parse(JSON.stringify(item))
            },

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
            },
            sayHello(){
              console.log("这里将会发起一个ajax请求");
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
.tab {
  width: 97%;
  margin: 0 auto;
}
</style>

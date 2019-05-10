<template>
   <div class="box">
       <div class="box-top">
           <div class="box-top-center">
               <div class="layui-inline">
                    <label class="layui-form-label">品牌名称：</label>
                    <div class="layui-input-inline inline-1">
                        <input type="text" name="mobile" lay-verify="title" placeholder="请输入名称关键字" autocomplete="off" class="layui-input">
                    </div>
               </div>
               <div class="layui-inline">
                    <label class="layui-form-label">更新时间：</label>
                    <div class="layui-input-inline inline-1">
                        <input type="text" name="mobile" lay-verify="title" placeholder="开始时间 到 结束时间" autocomplete="off" class="layui-input">
                    </div>
               </div> 
               <div class="layui-inline">
                   <Button type="error" class="layui-btn"> <Icon  type="ios-search-outline"  size="20"/>&nbsp;筛选</Button>
                   <Button type="error" class="layui-btn"><Icon type="ios-add-circle-outline" size="20" />&nbsp;添加</Button>
               </div>                                        
           </div>
       </div>
       <div class="box-top">
           <i-table border :columns="columns5" :data="data5" class="tab" height="200"></i-table>
           <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage" show-sizer show-elevator></Page>
        </div>
    </div>
</template>

<script>
let testData = {
        "histories": [
             {
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-1-3'
                    },{
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 120,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-30'
                    },{
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 8,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    }, {
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-1-3'
                    },{
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 120,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-30'
                    },{
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 8,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    }, {
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-1-3'
                    },{
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 120,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-30'
                    },{
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 8,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    }, {
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-1-3'
                    },{
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 120,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-30'
                    },{
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 8,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    }, {
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-1-3'
                    },{
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 120,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-30'
                    },{
                        id:1,
                        logo:"000",
                        name: '王小明',
                        age: 8,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    }
        ]
    }
  export default {
        data () {
            return {
                columns5: [
                    {
                        title: ' ',
                        key: 'id',
                        width:"40px",
                        align:"center"
                    },
                    {
                        title: '品牌名',
                        key: 'name',
                        width:"200px",
                        align:"center"
                    },
                    {
                        title: 'LOGO',
                        key: 'logo',
                        width:"120px",
                        align:"center",
                        render: (h, params) => {
                            return h('div', [
                                h('img', {
                                    attrs: {
                                        src:'/static/img/brandLogo/5ba9e21b16403.png'
                                    },
                                    style: {
                                        maxWidth: '30px',
                                        maxHeight: '30px'
                                    }
                                }),
                            ]);
                        }
                    },
                    {
                        title: '更新时间',
                        key: 'date',
                        sortable: true,
                        width:"200px",
                        align:"center"
                    },
                    {
                        title: '排序',
                        key: 'age',
                        sortable: true,
                        width:"100px",
                        align:"center"
                    },
                    {
                        title: '操作',
                        key: 'action',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        backgroundColor: "#FF7159",
                                        outline:"none",
                                        border:"none"
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        backgroundColor: '#393D49',
                                        outline:"none",
                                        border:"none"
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
                //分页
                ajaxHistoryData:[],
                pageSize: 5,//每页显示多少条
                dataCount: 0,//总条数
                pageCurrent: 1,//当前页
                data5: []
            }
        },
        methods: {
            
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `品牌名:${this.data5[index].name}<br>更新时间：${this.data5[index].date}`
                })
                console.log(this.data5.length)
            },
            remove (index) {
                this.data5.splice(index, 1);
            },
            // 获取历史记录信息
            handleListApproveHistory(){
                // 保存取到的所有数据
                this.ajaxHistoryData = testData.histories
                this.dataCount = testData.histories.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if(testData.histories.length < this.pageSize){
                    this.data5 = this.ajaxHistoryData;
                }else{
                    this.data5 = this.ajaxHistoryData.slice(0,this.pageSize);
                }
                    
               
            },
            changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.data5 = this.ajaxHistoryData.slice(_start,_end);
            }
        },
        created(){
             this.handleListApproveHistory();
        }
    }
</script>

<style scoped>
.box{
    padding:15px;
}
.box .box-top{
    padding:10px 10px 0 10px;
    background:#fff;
    border:1px solid #e6e6e6;
    margin-bottom:10px;
}
.box-top{
    overflow: hidden;
    overflow: auto;
}

.box-top-center{
    margin-bottom:0;
    overflow: hidden;
}
.layui-inline{
    margin-bottom:10px;
    margin-right:5px;
    overflow: hidden;
    display: inline-block;
}
.layui-form-label{
    float:left;
    display:block;
    padding:5px 2px;
    width:100px;
    font-weight:400;
    line-height:20px;
    text-align:right;
}
.layui-inline .inline-1{
    width:200px;
}
.inline-2{
    width:100px;
    float:left;
    margin-right:10px;
}
.layui-inline .inline-1{
    float:left;
    margin-right:10px;
}
.layui-input{
    height:32px;
    line-height: 1.3;
    border-width: 1px;
    border-style: solid;
    background-color: #fff;
    border-radius: 2px;
    display: block;
    width: 100%;
    padding-left: 10px;
    border-color:#e1e1e1;
    box-sizing: border-box;
    outline:none;
}
input::placeholder{
    color:rgb(201, 201, 201);
}
.layui-btn{
    background-color: #FF7159 !important;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 12px;
    border:none;
    margin-right: 5px;  
}
.button1{
    background-color: #FF7159 !important;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 12px;
    border:none;
    margin-right: 5px;
    color:white;
    margin-top:0;
}

body{
  font-size:14px;
  background:#f2f2f2;
}
html{
  color: rgb(102, 102, 102);
}


</style>
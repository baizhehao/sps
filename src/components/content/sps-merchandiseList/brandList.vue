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
           <i-table border :columns="columns5" :data="data5"></i-table>
          <Page :total="dataCount" :page-size="pageSize" @on-change="changepage" @on-page-size-change="_nowPageSize"
      show-total show-sizer show-elevator/>
        </div>
    </div>
</template>

<script>
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
                data5: [
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
                ],
                //分页
                pageSize: 5,//每页显示多少条
                dataCount: 0,//总条数
                pageCurrent: 1,//当前页
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
            }
            // ,
            // _getData() {
                //所有数据
                // this.data5 = [];
                // console.log(this.data5)
                // for (let i = 0; i < 100; i++) {
                // let a = {
                //     id: i,
                //     idName: 'Mr.Li' + i,
                //     name: '小李',
                //     organization: '国务院',
                //     people: '老李',
                //     state: '活跃',
                // };
                // this.data5.push(a);
                // }
                //分页显示所有数据总数
            //     this.dataCount = this.data5.length;
            //     //循环展示页面刚加载时需要的数据条数
            //     this.nowData = [];
            //     for (let i = 0; i < this.pageSize; i++) {
            //     this.nowData.push(this.data5[i]);
            //     }   
            // },
            // //点击，切换页面
            // changepage(index) {
            //     //需要显示开始数据的index,(因为数据是从0开始的，页码是从1开始的，需要-1)
            //     let _start = (index - 1) * this.pageSize;
            //     //需要显示结束数据的index
            //     let _end = index * this.pageSize;
            //     //截取需要显示的数据
            //     this.nowData = this.data5.slice(_start, _end);
            //     //储存当前页
            //     this.pageCurrent = index;
            // },
            // //每页显示的数据条数
            // _nowPageSize(index) {
            //     //实时获取当前需要显示的条数
            //     this.pageSize = index;
            // },
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
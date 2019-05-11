<template>
   <div class="box">
       <div class="box-top">
           <div class="box-top-center">
               <div class="layui-inline">
                    <label class="layui-form-label">操作时间：</label>
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
           <i-table id="i-table-box" border :columns="columns5" :data="data5" class="tab" height="200"></i-table>
           <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage" show-sizer show-elevator></Page>
        </div>
    </div>
</template>

<script>
let testData = {
        "histories": [
             {
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            },{
                serialNum:1,
                id:"deom",
                ip:"223.255.14.236",
                describe: '发货单列表',
                times: "2019-05-11 12:11:02",
                con: 'hhhhhhhh'
            }
        ]
    }
  export default {
        data () {
            return {
                columns5: [
                    {
                        type: 'selection',
                        width: 60
                    },{
                        title: ' ',
                        key: 'serialNum',
                        width:"40px"
                    },
                    {
                        title: '操作员',
                        key: 'id',
                        width:"192px"

                    },
                    {
                        title: '操作时间',
                        key: 'times',
                        width:"192px"
                       
                     
                    },
                    {
                        title: '操作描述',
                        key: 'describe',
                        width:"192px"
                    },
                    {
                        title: '操作内容',
                        key: 'con',
                        sortable: true,
                        width:"192px"
                    },
                    {
                        title: '操作IP',
                        key: 'ip'
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
    font: 14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
}
.box .box-top{
    padding:10px 10px 0 10px;
    background:#fff;
    border:1px solid #e6e6e6;
    margin-bottom:10px;
}
.box-top{
    overflow: hidden;
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
    box-sizing: content-box;
    float: left;
    display: block;
    padding: 5px 2px;
    width: 70px;
    font-weight: 400;
    line-height: 20px;
    text-align: right;
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
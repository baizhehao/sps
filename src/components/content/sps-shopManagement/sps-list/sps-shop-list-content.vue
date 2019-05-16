<template>
    <div class="shopContent">
        <div class="shopContentBox">
            <ul class="navs">
                <li class="navClass" :class='{changeBgC:1==isTrue}' @click="changeB(1)">
                    全部商品<span class="navTag">9</span>
                </li>
                <li class="navClass" :class='{changeBgC:2==isTrue}' @click="changeB(2)">
                    上架商品<span class="navTag navTag2">9</span>
                </li>
                <li class="navClass" :class='{changeBgC:3==isTrue}' @click="changeB(3)">
                    下架商品<span class="navTag navTag3">0</span>
                </li>
                <li class="navClass" :class='{changeBgC:4==isTrue}' @click="changeB(4)">
                    库存报警<span class="navTag navTag4">9</span>
                </li>
            </ul>
            
            <div class="shopListContent">
                <Table border ref="selection" height="573" v-if='childData' :columns="columns4" :data="childData"></Table>
                <Col class="demo-spin-col" fix v-else span="8">
                    <Spin fix>
                        <Icon type="ios-loading" size=30 class="demo-spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                </Col>
                <Page :total="childData.length" size="small" :page-size='5' show-total show-elevator show-sizer />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false,
            isTrue:-1,
            columns4: [
                {
                    type: 'selection',
                    width: 48,
                    align: 'center'
                },
                {
                    title: ' ',
                    key: 'id',
                    width:40,
                    align: 'center'
                },
                {
                    title: '热门',
                    sortable: true,
                    width:80,
                    align: 'center',
                    render:(h, params) => {
                        return h('div', [
                        h('i-switch', { //数据库1是已处理，0是未处理
                            props: {
                                type: 'primary',
                                value: true //params.row.treatment === 0  //控制开关的打开或关闭状态，官网文档属性是value
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                'on-change': (value) => {//触发事件是on-change,用双引号括起来，
                                                        //参数value是回调值，并没有使用到
                                    //this.switch(params.index) //params.index是拿到table的行序列，可以取到对应的表格值
                                }
                            }
                        }, )
                        ]);
                    }
                },
                {
                    title: '推荐',
                    sortable: true,
                    width:80,
                    align: 'center',
                    render:(h, params) => {
                        return h('div', [
                        h('i-switch', { //数据库1是已处理，0是未处理
                            props: {
                                type: 'primary',
                                value: true  //控制开关的打开或关闭状态，官网文档属性是value
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                'on-change': (value) => {//触发事件是on-change,用双引号括起来，
                                                        //参数value是回调值，并没有使用到
                                    //this.switch(params.index) //params.index是拿到table的行序列，可以取到对应的表格值
                                }
                            }
                        }, )
                        ]);
                    }
                },
                {
                    title: '缩略图',
                    key: 'smaPic',
                    width:100,
                    align: 'center'
                },
                {
                    title: '名称',
                    key: 'comName',
                    width:250,
                    align: 'center'
                },
                {
                    title: '排序',
                    key: 'sort',
                    width:80,
                    align: 'center'
                },
                {
                    title: '标签',
                    key: 'comTag',
                    width:120,
                    align: 'center'
                },
                {
                    title: '售销价',
                    key: 'salesPrice',
                    width:100,
                    align: 'center'
                },
                {
                    title: '成本价',
                    key: 'costPrice',
                    width:100,
                    align: 'center'
                },
                {
                    title: '市场价',
                    key: 'marketPrice',
                    width:100,
                    align: 'center'
                },
                {
                    title: '分类',
                    key: 'classify',
                    width:150,
                    align: 'center'
                },
                {
                    title: '类型',
                    key: 'type',
                    width:150,
                    align: 'center'
                },
                {
                    title: '品牌',
                    key: 'brand',
                    width:100,
                    align: 'center'
                },
                {
                    title: '上下架',
                    key: 'standUpAndDown',
                    width:100,
                    align: 'center'
                },
                {
                    title: '库存',
                    key: 'inventory',
                    width:100,
                    align: 'center'
                },
                {
                        title: '操作',
                        key: 'action',
                        width: 250,
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

                
            ]
        }
    },
    props:["childData"],
    methods:{
        changeB(num){
            this.isTrue=num
        },
        show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
        remove (index) {
            this.data6.splice(index, 1);
        }
    }
}
</script>

<style scoped>
 .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 573px;
        width:1006px;
        position: absolute;
        font-size:30px;
    }
.shopContent{
    background:#ffffff;
    padding: 10px 10px 0 10px;
    border:1px solid #e6e6e6;
    margin-top:10px;
    padding:10px;
}
.shopContentBox{
    border:1px solid #e6e6e6;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
    border-radius: 2px;
    margin:10px 0;
}
.navs{
    background-color: #f9f9f9;
    display: flex;
    font-size: 14px;
}
.navClass{
    width:105px;
    height: 40px;
    background-color: #f9f9f9;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #f9f9f9;
    cursor: pointer;
}
.navTag{
    float: right;
    width:18px;
    line-height: 18px;
    background-color: #eee;
    color: #666;
    border-radius: 2px;
    text-align: center;
    margin-top:10px;
    margin-right: 10px;
}
.navTag2{
    background-color: #009688;    
    color:#ffffff;
}
.navTag3{
    background-color: #393D49;    
    color:#ffffff;
}
.navTag4{
    background-color: #FF5722;    
    color:#ffffff;
}
.changeBgC{
    background-color:#ffffff;
    border-right-color: #fff;
}
</style>



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
                <Table border ref="selection" height="573" :columns="columns4" :data="data1"></Table>
                <Page :total="40" size="small" show-elevator show-sizer />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
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
                    key: 'action',
                    sortable: true,
                    width:80,
                    align: 'center',
                    render:()=>{
                        return
                    }
                },
                {
                    title: '推荐',
                    key: 'action',
                    sortable: true,
                    width:80,
                    align: 'center',
                    render:()=>{
                        return
                    }
                },
                {
                    title: '缩略图',
                    key: 'address',
                    width:100,
                    align: 'center'
                },
                {
                    title: '名称',
                    key: 'address',
                    width:250,
                    align: 'center'
                },
                {
                    title: '排序',
                    key: 'address',
                    width:80,
                    align: 'center'
                },
                {
                    title: '标签',
                    key: 'address',
                    width:120,
                    align: 'center'
                },
                {
                    title: '售销价',
                    key: 'address',
                    width:100,
                    align: 'center'
                },
                {
                    title: '成本价',
                    key: 'address',
                    width:100,
                    align: 'center'
                },
                {
                    title: '市场价',
                    key: 'address',
                    width:100,
                    align: 'center'
                },
                {
                    title: '分类',
                    key: 'address',
                    width:150,
                    align: 'center'
                },
                {
                    title: '类型',
                    key: 'address',
                    width:150,
                    align: 'center'
                },
                {
                    title: '品牌',
                    key: 'address',
                    width:100,
                    align: 'center'
                },
                {
                    title: '上下架',
                    key: 'address',
                    width:100,
                    align: 'center'
                },
                {
                    title: '库存',
                    key: 'address',
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

                
            ],
            data1: [
                {
                    id: '1',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    id: '2',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    id: '3',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    id: '4',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        }
    },
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

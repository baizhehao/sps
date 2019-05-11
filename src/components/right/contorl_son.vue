<template>
    <div class="contorl_bottom_bot">
        <Table height="300" border ref="selection" :columns="columns4" :data="data1"></Table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 48,
                        align: 'center'
                    },
                    {
                        title: '订单号',
                        width:140,
                        key: 'name'
                    },
                    {
                        title: '打印',
                        width:100,
                        key: 'age'
                    },
                    {
                        title: '下单时间',
                        width:160,
                        key: 'address'
                    },
                    {
                        title: '订单状态',
                        width:90,
                        key: 'address'
                    },
                    {
                        title: '售后状态',
                        width:150,
                        key: 'address'
                    },
                    {
                        title: '用户名',
                        width:120,
                        key: 'address'
                    },
                    {
                        title: '收货人手机号',
                        width:120,
                        key: 'address'
                    },
                    {
                        title: '收货地址',
                        width:110,
                        key: 'address'
                    },
                    {
                        title: '支付状态',
                        width:90,
                        key: 'address'
                    },
                    {
                        title: '发货状态',
                        width:90,
                        key: 'address'
                    },
                    {
                        title: '订单总额',
                        width:100,
                        key: 'address'
                    },
                    {
                        title: '订单来源',
                        width:130,
                        key: 'address'
                    },
                    {
                        title: '操作',
                        width:200,
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John ',
                        age: 18,
                        address: 'New ',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim',
                        age: 24,
                        address: 'London',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe',
                        age: 30,
                        address: 'Sydney ',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon',
                        age: 26,
                        address: 'Ottawa',
                        date: '2016-10-04'
                    },
                    {
                        name: 'John ',
                        age: 18,
                        address: 'New ',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim',
                        age: 24,
                        address: 'London',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe',
                        age: 30,
                        address: 'Sydney ',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon',
                        age: 26,
                        address: 'Ottawa',
                        date: '2016-10-04'
                    }
                ],
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
         }
    }
</script>

<style scoped>
    .ivu-table-border td, .ivu-table-border th{
        text-align: center !important;
    }
</style>



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
                        key: 'odd'
                    },
                    {
                        title: '售后状态',
                        width:150,
                        key: 'after'
                    },
                    {
                        title: '用户名',
                        width:120,
                        key: 'username'
                    },
                    {
                        title: '收货人手机号',
                        width:120,
                        key: 'phone'
                    },
                    {
                        title: '收货地址',
                        width:110,
                        key: 'take'
                    },
                    {
                        title: '支付状态',
                        width:90,
                        key: 'pay'
                    },
                    {
                        title: '发货状态',
                        width:90,
                        key: 'deliver'
                    },
                    {
                        title: '订单总额',
                        width:100,
                        key: 'gross'
                    },
                    {
                        title: '订单来源',
                        width:130,
                        key: 'root'
                    }
                ],
                data1:[]
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
        },
        created(){
            fetch('http://10.35.164.18:3000/orderMana/get',{
                method:'GET'
            }).then((res)=>{
                return res.text();
            }).then((res)=>{
                console.log(JSON.parse(res));
                this.data1 = JSON.parse(res);
            })
        }
    }
</script>

<style scoped>
    .ivu-table-border td, .ivu-table-border th{
        text-align: center !important;
    }
</style>



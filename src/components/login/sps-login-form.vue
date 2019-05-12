<template>
<div class="log-forms">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user" class="log_user">
            <Input type="text" v-model="formInline.user" placeholder="账号">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password" class="log_user">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem class="log_user">
            <Button @click="handleSubmit()" type="primary">登录</Button>
        </FormItem>
    </Form>
</div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '必填项不能为空', trigger: '' }
                    ],
                    password: [
                        { required: true, message: '必填项不能为空', trigger: 'blur' },
                        { type: 'string', min: 3, message: '密码长度不能小于3位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit() {
                let usObj={
                    useName:this.formInline.user,
                    usePass:this.formInline.password
                }
               this.$emit("childFunc",usObj)
            }
        }
    }
</script>

<style scoped>
.log-forms{
    padding: 20px;
}
.log_user button{
    width:100%;
}
</style>

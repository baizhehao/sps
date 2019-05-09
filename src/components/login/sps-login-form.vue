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
        <router-link to="/index">
            <FormItem class="log_user">
                <Button type="primary">登录</Button>
            </FormItem>
        </router-link>
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
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>

<style scoped>
.log-forms{
    padding: 20px;
}
/* .log_user {
    margin-bottom: 15px;
    clear: both;
}
.log_user input{
    outline: none;
} */
.log_user button{
    /* outline: none; */
    width:100%;
}
</style>

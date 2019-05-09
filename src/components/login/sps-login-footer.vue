<template>
    <div class='log-footer'>
        <p>© 2019 <a href="###">河南吉海网络科技有限公司 jihainet.com</a></p>
        <p>
            <span><a href="###">获取授权</a></span>
            <span><a href="###">获取授权</a></span>
            <span><a href="###">获取授权</a></span>
        </p>
    </div>
</template>

<script>

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
    //这里存放数据
        return {

        };
    }
}
</script>

<style scoped>
.log-footer{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    line-height: 30px;
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    color: rgba(0,0,0,.5);
}
.log-footer p a{
    padding: 0 5px;
    color: rgba(0,0,0,.5);
}
.log-header p span{
    padding: 0 5px;
}
</style>
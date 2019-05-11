<template>
  <div class="log">
      <div class="log-user">
        <loginHeader/>
        <logForm @childFunc="loginVerify" />
      </div>
      <logFooter/>
  </div>
</template>

<script>
  import loginHeader from "../components/login/sps-login-header"
  import logForm from "../components/login/sps-login-form"
  import logFooter from "../components/login/sps-login-footer"
  import querystring from "querystring"
  export default {
    name: 'index',
    components:{
      loginHeader,
      logForm,
      logFooter
    },
    methods:{
      async loginVerify(dataObj){
        let bodyObj = querystring.encode(dataObj)
        let resData = await fetch("http://10.35.164.18:3000/login/select",{
                                  method:"POST",
                                  body:bodyObj,
                                  headers:{
                                    "Content-Type":"application/x-www-form-urlencoded"
                                  }
                                })
        /**
         * retuData  后台返回的数据  并进行判断
         */
         let retuData = await resData.json(); 

         if(retuData.isLogin==1){
            sessionStorage.setItem("data",JSON.stringify(retuData))
            this.$Message.success('登录成功');
            this.$router.push('/index');
         }else{
            this.$Message.error('用户名或密码错误');
         }  
      }
    }
  }
</script>

<style scoped>
.log{
    background-color: #f2f2f2;
    position: relative;
    left: 0;
    top: 0;
    padding: 110px 0;
    min-height: 100%;
    box-sizing: border-box;
}
.log-user{
    width: 375px;
    margin: 0 auto;
    box-sizing: border-box;
}
</style>

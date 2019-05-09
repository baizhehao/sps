<template>
  <div class="log">
      <div class="log-user">
        <loginHeader/>
        <logForm/>
      </div>
      <logFooter/>
  </div>
</template>

<script>
  import loginHeader from "../components/login/sps-login-header"
  import logForm from "../components/login/sps-login-form"
  import logFooter from "../components/login/sps-login-footer"
  export default {
    name: 'index',
    components:{
      loginHeader,
      logForm,
      logFooter
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

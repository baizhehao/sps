<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  height:100%;
}
html{
  background:#f2f2f2;
}

div, p, span, i, h1, h2, h3, h4, h5, ul, li, dl, dt, dd {
    word-break: normal;
}
body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,td,input,select,option,textarea{
    margin:0;
    padding:0;
}
ul,ol,li{list-style:none;}
a,u{text-decoration:none;}
img{border:none; display:block;}
body{font-family:'微软雅黑';}
h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
}

body{
  font-size:14px;
  background:#f2f2f2;
}
html{
  color: rgb(102, 102, 102);
}
.ivu-upload-list {
    margin-top:0 !important;
}
</style>

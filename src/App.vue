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
body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;
}
html,body{
	height: 100%;
}
#app,.layout,.ivu-layout{
  height: 100%;
}
body{
	font-family:'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', 'sans-serif','微软雅黑';
  width: 100%;
}
ul,ol{
	list-style:none;
}
img{
	border: 0;
}
a{
    text-decoration: none;
}
#test .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
  height: 52px;
  padding: 14px 16px;
  position: relative;
  cursor: pointer;
  z-index: 1;
  transition: all .2s ease-in-out;
}
  #Menu .ivu-select-dropdown{
    width:300px;
    height:182px;
    padding:0;
    top: 39px !important;
    left: -251.03px !important;
  }
  #hezi .ivu-drawer{
    top:52px;
  }
</style>

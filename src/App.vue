<template>
  <div id="app">

    <!-- <spsColmd/> -->
     <!-- <top/> -->
     <right></right>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import right from "./components/sps-right"
// import spsColmd from "./components/sps-colmd-thirly";
// import top from "./components/sps-right-top"
export default {
  name: 'App',
  components: {
right
  }
}
</script>

<style>
body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;
}
body{
  font-family: "微软雅黑",Arial;
  background-color: #ccc;
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

</style>

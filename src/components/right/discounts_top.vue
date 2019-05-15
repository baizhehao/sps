<!--  -->
<template>
  <div class="box">
    <div class="sel">
      <div class="text">
        <div class="t">
            <span class="sp">优惠券名称:</span>
        </div>
        <i-input class="int" type="text" :autosize="true" placeholder="请输入优惠券名称"></i-input>
      </div>
      <div class="text">
        <div class="t">
            <span class="sp">启用状态:</span>
        </div>
              <i-select :model.sync="model9"  class="start">
                <i-option value="shanghai" label="请选择">
              <span>请选择</span>
              <span style="float:right;color:#ccc">select</span>
          </i-option>
          <i-option value="beijing" label="关闭">
              <span>关闭</span>
              <span style="float:right;color:#ccc">close</span>
          </i-option>
          <i-option value="shanghai" label="开启">
              <span>开启</span>
              <span style="float:right;color:#ccc">start</span>
          </i-option>

      </i-select>

      </div>
      <div class="text">
        <div class="t">
            <span class="sp">起止时间:</span>
        </div>
      <i-col class="time" span="12">
              <Date-picker type="daterange" placement="bottom-end" placeholder="请输入起止时间" style="width: 200px"></Date-picker>
          </i-col>
      </div>
    </div>


      <div class="btn">
        <i-button class="btn1" type="error">
          <span class="iconfont">&#xe680;</span>
          筛选
          </i-button>


           <Button type="primary" @click="modal1 = true">
               <span class="iconfont"> &#xe639;</span>
               添加
           </Button>
    <Modal
        v-model="modal1"
        title="添加数据"
        @on-ok="ok()"
        @on-cancel="cancel">
        ID:<Input  class="inp" placeholder="请输入id号" v-model="list.id" />
        优惠券名称: <Input  size="small" placeholder="请输入优惠券名称" v-model="list.name" />
        开始时间:<Input  class="inp" placeholder="请输入开始时间" v-model="list.starttime"/>
        结束时间: <Input  size="small" placeholder="请输入结束时间" v-model="list.endtime"/>
    </Modal>
      </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
          model9: '',
          modal1: false,

            // id:"",
            // name:"",
            // starttime:"",
            // endtime:""
            list:[
              {
                id:"",
                name:"",
                starttime:"",
                endtime:""
              }
           ]

};
},
//监听属性 类似于data概念
computed: {

},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
        ok () {
                  //  this.$Message.info('保存成功');
                this.$store.state.Vip=this.list;
                console.log("www:"+ this.list.id)
                console.log("www:"+this.list.name)
                console.log("www:"+this.list.starttime)
                console.log("www:"+this.list.endtime)


                  //  fetch(' http://10.35.164.18:3000/histories/add',{
                  //       method:"POST",
                  //       body:JSON.stringify({
                  //       username:this.list.id,
                  //       shenpistatus:this.list.name,
                  //       shenpicomments:this.list.starttime,
                  //       time:this.list.endtime,

                  //       }),
                  //       // body:six,
                  //       headers:new Headers({
                  //       "Content-Type":"application/x-www-from-urlencoded"
                  //       })
                  //       }).then((res)=>{
                  //       return res.text();
                  //       }).then((res)=>{
                    //     this.historyData =  JSON.parse(res);
                  //       console.log(res)
                  //       })

            },
            cancel () {
                this.$Message.info('未保存');
            },

},
//生命周期 - 创建完成（可以访问当前this实例）
//有数据，没有真实DOM
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
//模板编译完毕，数据也挂载完毕
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, // 模板编译(template)数据挂载之前执行的钩子函数
beforeUpdate() {},  //data里的值改变了，但还没渲染到html上去
updated() {}, //组件更新之后执行的函数,更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.box{
  width: 97%;
  height: 100px;
  background-color: white;
  border: 1px solid #e6e6e6;
  margin: 15px 0;
}
.sel{
   width: 1000px;
   height: 50px;
}
.t{
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  /* display: inline-block; */
  float: left;
  margin:10px 10px;

}
.text{
  width: 250px;
  /* display: inline-block; */
  float: left;
}
.int{
  float:left;
  width: 150px;
  margin-top: 10px;
  outline: none;
}
.start{
  width: 120px;
  margin-top: 10px;
}
.time{
  width: 100px;
  margin-top: 10px;
}
.btn{
  margin:0 10px;
}
.btn1{
    margin-right: 10px;
}

</style>

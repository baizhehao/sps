<template>
<div class="second-sheng">
    <div class="wei-second">
    <div class="wei-second">
        <!-- 头部 -->
        <div class="second-top">小程序上线流程：下载模板->上传模板->提交审核->查询进度->全网发布。查看[帮助手册]快速上线</div>
        <!-- 内容 -->
        <div class="second-content">
            <!-- 左边 -->
            <div class="second-content1">
                <div class="second-content1-img">
                    <img src="../../../assets/erweima.png">
                </div>
                <div class="second-content1-bottom">
                    <div class="second-content1-bottom-left">
                        <br/>
                        <br/>
                        <p>模板名称：uni-app简约模板</p>
                        <br/>
                        <p>模板版本：1.0</p>
                        <br/>
                        <p>模板描述：支持小程序、H5、公众号。</p>
                    </div>
                    <div class="second-content1-bottom-right">
                        <br/><br/><br/>
                        <p>模板教程</p>
                        <Button type="error"><a href="https://www.jihainet.com/">下载模板</a></Button>
                    </div>
                </div>
            </div>
            <!-- 右边 -->
            <div class="second-content2">
                <div class="second-content1-img">
                    <img src="../../../assets/shop.png">
                </div>
                <div class="second-content1-bottom">
                    <div class="second-content1-bottom-left">
                        <br/>
                        <br/>
                        <p>模板名称：B2C标准版</p>
                        <br/>
                        <p>模板版本：1.0.0</p>
                        <br/>
                        <p>模板描述：包含小程序以及H5模板</p>
                    </div>
                    <div class="second-content1-bottom-right">
                        <br/><br/><br/>
                        <p>模板教程</p>
                        <Button type="error"><a href="https://www.jihainet.com/">下载模板</a></Button>
                    </div>
                </div>
            </div>
            <!-- 下面 -->
            <div class="second-content3">
                <div class="second-content1-img">
                    <img src="../../../assets/shop.png">
                </div>
                <div class="second-content1-bottom">
                    <div class="second-content1-bottom-left">
                        <br/>
                        <br/>
                        <p>模板名称：小程序食品鲜花模板</p>
                        <br/>
                        <p>模板版本：1.0</p>
                        <br/>
                        <p>模板描述:仅小程序可用</p>
                    </div>
                    <div class="second-content1-bottom-right">
                        <br/><br/><br/>
                        <p>模板教程</p>
                        <Button type="error"><a href="https://www.jihainet.com/">下载模板</a></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- 圣杯 -->
    <div class="second-sheng-bottom">
        吉海科技 © jihainet.com - 版权所有 问题请求|产品建议请上吉海论坛 《使用手册》
    </div>
</div>
</template>
<script>
export default{
    name:"model"
}
</script>
<style scoped>
.second-sheng{
    width:100%;
    position: relative;
}
.second-sheng-bottom{
    width:100%;
    height:45px;
    position: fixed;
    bottom:0px;
    background-color: rgb(179, 176, 176);
    text-align: center;
    line-height: 45px;
}
a{
    list-style:none;
    color:white;
}
.wei-second{
    width:100%;
    padding:15px;
    box-sizing:border-box;
    background-color: red;
    height:843px;
}
.wei-second{
    width:100%;
    height: 813px;
    padding:10px;
    box-sizing:border-box;
    background-color: white;
}
/* 最顶部 */
.second-top{
    width:100%;
    height:40px;
    padding:10px;
    box-sizing:border-box;
    margin-bottom:15px;
    background-color:#FFFFCC;
    border:1px solid #FFFF33;
}
/* 内容 */
.second-content{
    width:100%;
    height:710px;
    display:flex;
    background-color: white;
    flex-wrap: wrap;
}
/* 第一个 */
.second-content1-img img{
    display:block;
    margin:auto;
}
.second-content1-bottom{
    width:100%;
    height:160px;
    display:flex;
}
.second-content1-bottom-left{
    flex-basis:50%;
    text-align: center;
}
.second-content1-bottom-right{
    flex-basis:50%;
    color:red;
    text-align:center;  
}
.second-content1{
    flex-basis:50%;
    border-left:1px solid grey;
    border-top:1px solid grey;
    height:360px;
    background-color:white;
}
.second-content2{
    flex-basis:50%;
    height:360px;
     border:1px solid grey;
    background-color:white;

}
.second-content3{
    flex-basis:50%;
    height:360px;
    border:1px solid grey;
    background-color:white;
}
</style>
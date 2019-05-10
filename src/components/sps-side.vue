<template>
  <div class="layout layout_height">
    <Layout>
      <Sider ref="side1" class="side_box"  hide-trigger collapsible :width="220" :collapsed-width="60" v-model="isCollapsed">
        <Menu active-name="1-2" class="side_tit" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1">
                <!-- <Icon type="ios-navigate"></Icon> -->
                <span>零食铺购物系统</span>
            </MenuItem >
        </Menu>
        <Menu active-name="1-2" id="test" theme="dark" width="auto" class="side_list" :class="menuitemClasses">
          <MenuItem name="1">
            <div  @click = "show">
              <router-link to="/sps_right">
                <Icon type="ios-navigate"></Icon>
                <span>首页</span>
              </router-link>
            </div>
          </MenuItem >
          <Submenu name="2">
            <template  slot="title">
              <Icon type="ios-search"></Icon>
              <span>会员管理</span>
            </template>
            <router-link to='/usList'><MenuItem name="1-1">用户列表</MenuItem></router-link>
          </Submenu>
          <Submenu name="3">
            <template  slot="title">
              <Icon type="ios-settings"></Icon>
              <span>商品管理</span>
            </template>
            <MenuItem name="1-1">商品列表</MenuItem>
            <MenuItem name="1-2">商品分类</MenuItem>
            <MenuItem name="1-3">品牌列表</MenuItem>
            <MenuItem name="1-3">商品类型</MenuItem>
            <MenuItem name="1-3">参数列表</MenuItem>
            <MenuItem name="1-3">商品评价</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template  slot="title">
              <Icon type="ios-settings"></Icon>
              <span>订单管理</span>
            </template>
            <MenuItem name="1-1">订单列表</MenuItem>
            <MenuItem name="1-2">提货单列表</MenuItem>
            <MenuItem name="1-3">发货单列表</MenuItem>
            <MenuItem name="1-3">售后单列表</MenuItem>
            <MenuItem name="1-3">退货单列表</MenuItem>
          </Submenu>
          <Submenu name="5">
            <template  slot="title">
              <Icon type="ios-settings"></Icon>
              <span>运营管理</span>
            </template>
            <MenuItem name="1-1">广告位列表</MenuItem>
            <MenuItem name="1-2">文章列表</MenuItem>
            <MenuItem name="1-3">广告列表</MenuItem>
            <MenuItem name="1-3">文章分类</MenuItem>
          </Submenu>
          <Submenu name="6">
            <template  slot="title">
              <Icon type="ios-settings"></Icon>
              <span>促销管理</span>
            </template>
            <MenuItem name="1-1">促销列表</MenuItem>
            <MenuItem name="1-2">团购秒杀列表</MenuItem>
           <router-link to="/youhui">
            <MenuItem name="1-3">优惠卷列表</MenuItem>
           </router-link>
          </Submenu>
          <Submenu name="7">
            <template  slot="title">
              <Icon type="ios-settings"></Icon>
              <span>财务管理</span>
            </template>
            <MenuItem name="1-1">提现列表</MenuItem>
            <MenuItem name="1-2">支付单列表</MenuItem>
            <MenuItem name="1-3">退款单列表</MenuItem>
            <MenuItem name="1-3">账户资金管理</MenuItem>
          </Submenu>
          <Submenu name="8">
            <template  slot="title">
              <Icon type="ios-settings"></Icon>
              <span>控制面板</span>
            </template>
            <MenuItem name="1-1">门店列表</MenuItem>
            <MenuItem name="1-2">消息配置</MenuItem>
            <MenuItem name="1-3">插件列表</MenuItem>
            <MenuItem name="1-3">图片列表</MenuItem>
            <MenuItem name="1-3">操作日志</MenuItem>
            <MenuItem name="1-3">地区管理</MenuItem>
            <MenuItem name="1-3">配送方式列表</MenuItem>
            <MenuItem name="1-3">导入导出</MenuItem>
            <MenuItem name="1-3">钩子列表</MenuItem>
            <MenuItem name="1-3">店铺设置</MenuItem>
            <MenuItem name="1-3">物流公司列表</MenuItem>
          </Submenu>
          <Submenu name="9">
            <template  slot="title">
              <Icon type="ios-settings"></Icon>
              <span>报表统计</span>
            </template>
            <MenuItem name="1-1">商品销量</MenuItem>
            <MenuItem name="1-2">财务收款</MenuItem>
            <MenuItem name="1-3">用户收藏统计</MenuItem>
            <MenuItem name="1-3">订单销量</MenuItem>
          </Submenu>
          <Submenu name="10">
            <template  slot="title">
              <Icon type="ios-settings"></Icon>
              <span>微信管理</span>
            </template>
            <MenuItem name="1-1">模块列表</MenuItem>
            <MenuItem name="1-2">微信消息管理</MenuItem>
            <MenuItem name="1-3">公众号菜单</MenuItem>
          </Submenu>
          <Submenu name="11">
            <template  slot="title">
              <Icon type="ios-settings"></Icon>
              <span>智能列表</span>
            </template>
            <MenuItem name="1-1">表单列表</MenuItem>
            <MenuItem name="1-2">提交列表</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <div class="Header_top">
            <div class="Header_left">
              <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
              <Icon type="ios-globe" size="20" :style="{margin: '0 20px'}"/>
              <Icon type="md-refresh" size="20" :style="{margin: '0 20px'}"/>
            </div>
            <div class="Header_right">
              <div class="color">
                <span class="iconfont pallet" @click="value1 = true" type="primary">&#xe671;</span>
                <Drawer title="Basic Drawer" :closable="false" v-model="value1" id="hezi">
                  <p class="color_box"></p>
                  <p class="color_box color_box_blue"></p>
                  <p class="color_box color_box_pink"></p>
                </Drawer>
              </div>
              <Dropdown trigger="click" style="margin-left: 20px;" id="Menu">
                <span class="iconfont">&#xe644;</span>
                <DropdownMenu slot="list">
                  <ul>
                    <li class="ul_top">便签</li>
                    <li class="ul_bottom">欢迎使用Jshop小程序商城。便签中的内容会存储在本地，这样即便你关掉了浏览器，在下次打开时，依然会读取到上一次的记录。是个非常小巧实用的本地备忘录</li>
                  </ul>
                </DropdownMenu>
              </Dropdown>
              <span class="iconfont">&#xe86a;</span>
              <Dropdown>
                <span class="demo" href="javascript:void(0)">
                  demo
                  <Icon type="md-arrow-dropdown" size="26"/>
                </span>
                <DropdownMenu slot="list">
                  <DropdownItem class="but person">个人中心</DropdownItem>
                  <DropdownItem class="but clear">清除缓存</DropdownItem>
                  <DropdownItem class="but exit">退出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div class="Header_bottom">
            <div class="Header_bottom_One">
              <span class="iconfont iconfont_two">&#xe600;</span>
              <span class="iconfont iconfont_two">&#xe60e;</span>
            </div>
            <div class="table_page">
              <span class="table_son">
                用户列表
              <Icon class='call' type="ios-close" />
              </span>
              <span class="table_son">
                用户列表
              <Icon class='call' type="ios-close" />
              </span>
            </div>
            <div class="Header_bottom_Two">
              <span class="iconfont iconfont_two">&#xe60d;</span>
              <Dropdown>
                <Icon class='back' type="ios-arrow-down" size="20" href="javascript:void(0)"/>
                <DropdownMenu slot="list" class="list">
                  <DropdownItem>关闭当前标签页</DropdownItem>
                  <DropdownItem>关闭其他标签页</DropdownItem>
                  <DropdownItem>关闭全部标签页</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content>
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import '../assets/css/iconfont.css'
    export default {
        name: "sps-side",
        data () {
            return {
              isCollapsed: false,
              MenuObj:{
                MenuTextClass:false,
              },
              value1: false
            }
        },
        computed: {
            rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
            },
            menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
            this.$refs.side1.toggleCollapse();
            console.log(document.querySelectorAll(".ivu-menu-submenu-title-icon"))
            document.querySelectorAll(".ivu-menu-submenu-title-icon").forEach((itme,index)=>{
                  // console.log(itme.style.display)
                  if(itme.style.display="block"){
                    itme.style.display="none"
                  }
              })
            },
            show(){
              this.MenuObj.MenuTextClass = true;
            }
        },
        mounted:function(){
            document.querySelector("."+this.$refs.side1.childClasses).style.cssText = ` display:flex;flex-direction: column;`;
            document.getElementsByClassName('pallet')[0].onclick = function(){
              document.getElementsByClassName('ivu-drawer-header-inner')[0].innerHTML = '配色方案';
            }
        }
    }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f6f6f6;
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width:120px;
    text-overflow: ellipsis;
    white-space:nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .ivu-menu-submenu-title{
    padding: 14px 22px;
  }
  .ivu-dropdown{
    position:relative;
  }
  .side_box{
      display: flex;
      flex-direction: column;
  }
  .side_tit{
      height: 49px;
      background:#FF7159;
  }
  .side_list{
    flex:1;
    overflow-y: auto;
    background:#393D49;
  }
  .side_box span{
    color: rgba(255,255,255,.8);
    font-size: 16px;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover{
     background:#FF7159;
  }
  .MenuTextClass{
    background:#FF7159 !important;
  }
  .Header_left{
    height:50px;
    padding:0 10px;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
  .Header_right{

  }
  .iconfont{
    margin:0 20px;
  }
  .demo{
    font-weight:600;
  }
  .but{
    padding-top:16px;
  }
  .exit{
    border-top:1px solid #ccc;
  }
  .ul_top{
    background:#20222A;
    color:#fff;
    font-size:16px;
    padding:0 80px 0 20px;
  }
  .ul_bottom{
    padding: 10px 20px;
    line-height:2;
  }
  .color{
    display:inline;
  }
  .color_box{
    display:inline-block;
    width:100px;
    height:100px;
    background:lightsalmon;
  }
  .color_box_blue{
    background:lightskyblue;
  }
  .color_box_blue{
    background:lightpink;
  }
  .Header_top{
    width:100%;
    display:flex;
    justify-content:space-between;
  }
  .Header_bottom{
    height:40px;
    background:#fff;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #ccc;
    box-sizing:border-box;
  }
  .Header_bottom_One{
    display:flex;
  }
  .iconfont_two{
    display:block;
    width:40px;
    height:100%;
    border:1px solid #f6f6f6;
    box-sizing:border-box;
    margin:0;
    font-size:20px;
    text-align:center;
    line-height:40px;
  }
  .table_page{
    display:flex;
    flex:1;
  }
  .table_son{
    display:block;
    height:auto;
    background:#f6f6f6;
    border-top:2px solid #000;
    box-sizing:border-box;
    font-size:14px;
    line-height:40px;
    padding:0 40px 0 15px;
    border-right: 1px solid #f6f6f6;
    position:relative;
  }
  .call{
    position:absolute;
    right: 8px;
    top: 30%;
    font-size:16px;
    border-radius:50%;
  }
  .call:hover{
    background:#FF5722;
    color:#fff;
  }
  .Header_bottom_Two{
    display:flex;
  }
  .back{
    display:block;
    width:40px;
    height:auto;
    text-align:center;
    line-height:40px;
  }

</style>

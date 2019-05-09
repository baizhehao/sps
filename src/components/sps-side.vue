<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" class="side_box"  hide-trigger collapsible :width="220" :collapsed-width="60" v-model="isCollapsed">
        <Menu active-name="1-2" class="side_tit" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1">
                <!-- <Icon type="ios-navigate"></Icon> -->
                <span>零食铺购物系统</span>
            </MenuItem >
        </Menu>
        <Menu active-name="1-2" theme="dark" width="auto" class="side_list" :class="menuitemClasses">
          <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            <span>首页</span>
          </MenuItem >
          <Submenu name="2">
            <template  slot="title">
              <Icon type="ios-search"></Icon>
              <span>会员管理</span>
            </template>
            <MenuItem name="1-1">用户列表</MenuItem>
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
            <MenuItem name="1-3">优惠卷列表</MenuItem>
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
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        </Header>
        <Content>
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
    export default {
        name: "sps-side",
        data () {
            return {
            isCollapsed: false
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
            }
        },
        mounted:function(){
            document.querySelector("."+this.$refs.side1.childClasses).style.cssText = ` display:flex;flex-direction: column;`
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
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
    padding:14px 22px;
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
  }
  .side_box span{
    color: rgba(255,255,255,.8);
    font-size: 16px;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover{
    background:#FF7159;
  }
</style>

<template>
  <div>
    <div class="base-header">
      <div class="header-title">您好，欢迎访问九九书城</div>
      <div>
        <el-row>
          <el-col :span="8">
            <el-avatar :size="60">
              <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
            </el-avatar>
          </el-col>
          <el-col :span="8">
            <div style="width: 150px"></div>
          </el-col>
          <el-col :span="8">
            <el-dropdown style="line-height: 70px">
              <span class="el-dropdown-link" style="color: #F2F2F2">
                {{uname}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="handleLoginOut">退出登陆</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="mina-body">
      <div class="menu-cls">
        <el-menu class="el-menu-vertical-demo" default-active="book" router>
          <el-menu-item index="index">
            <span slot="title">图书信息查看</span>
          </el-menu-item>
          <el-menu-item index="categoryReport">
            <span slot="title">图书大分类报表</span>
          </el-menu-item>
          <el-menu-item index="smallCategory">
            <span slot="title">图书小分类报表</span>
          </el-menu-item>
          <el-menu-item index="price">
            <span slot="title">图书价格报表</span>
          </el-menu-item>
          <el-menu-item index="pub">
            <span slot="title">图书出版社统计</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div style="width: 100%">
        <div style="height: 50px;border-bottom: 1px solid rgba(0,0,0, .1);line-height: 40px">
          <h2 style="margin-left: 20px">{{pageName}}</h2>
        </div>
        <router-view style="overflow-y: scroll"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Base",
    data(){
      return {
        pageName: '首页',
        uname: sessionStorage.getItem('uname')
      }
    },
    methods: {
      handleLoginOut(){
        sessionStorage.clear();
        this.$router.push({path: '/'});
      }
    },
    watch: {
      $route(to, from){
        this.pageName = to.name
      }
    },
    created() {
      this.pageName = this.$route.name
    }
  }
</script>

<style scoped>
  .menu-cls{
    width: 240px;
    height: 100%;
  }
  .base-header{
    height: 70px;
    background: #3C5FDA;
    display: flex;
    justify-content: space-between;
  }
  .header-title{
    color: #CCCCCC;
    font-size: 20px;
    line-height: 70px;
    font-weight: bold;
    margin-left: 20px;
  }
  .mina-body{
    display: flex;
    justify-content: space-around;
  }
</style>

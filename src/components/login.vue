<template>
  <div>
    <el-card style="width: 700px;height: 400px; margin: 200px auto" class="login-card">
      <div class="login-cls">
        <div style="width: 400px">
          <img src="../assets/login.jpg" alt="" style="width: 350px;height: 400px">
        </div>
        <div style="width: 300px;margin-right: 10px">
          <h2 style="text-align: center">欢迎登陆</h2>
          <el-form ref="form" :model="loginItem" label-width="80px" size="mini" label-position="top">
            <el-form-item label="用户名">
              <el-input class="login-input" placeholder="请输入用户名" v-model="loginItem.uname"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input class="login-input" placeholder="请输入密码" v-model="loginItem.pwd" type="password"></el-input>
            </el-form-item>
          </el-form>
          <div style="text-align: center">
            <el-button type="primary" round style="width: 250px;margin-top: 10px" @click="handleLogin">登陆</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import {loginApi} from '../fetch/book'
  export default {
    name: "login",
    data(){
      return {
        loginItem: {
          uname: '',
          pwd: ''
        }
      }
    },
    methods: {
      handleLogin(){
        loginApi(this.loginItem).then(response=>{
          if(response.login_staus === 1){
            sessionStorage.setItem('uname', this.loginItem.uname);
            this.$router.push({path: '/index'});
          }else{
            this.$message({
              message: response.msg,
              type: 'warning'
            });
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-card >>> .el-card__body{
    padding: 0;
  }
  .login-cls{
    display: flex;
    justify-content: space-between;
  }
  .login-cls >>> .el-input__inner{
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0;
  }
</style>

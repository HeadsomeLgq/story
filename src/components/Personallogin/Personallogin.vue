<template>
   <div class="personal">
     <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
       <mu-icon @click="closePersonal" class="l_logo" slot="left" value="keyboard_backspace" color="lightseagreen"></mu-icon>
       <h2 class="login">登录</h2>
       <mu-icon class="r_logo" slot="right" value="home" color="lightseagreen"></mu-icon>
     </mu-appbar>
       <mu-tabs class="person_bar" :value.sync="active2" color="#fff" indicator-color="lightseagreen" full-width>
         <mu-tab class="title_p">用户密码</mu-tab>
         <mu-tab class="title_p">手机验证码</mu-tab>
       </mu-tabs>
         <div class="login-input-wrap" v-if="active2 === 0">
           <div class="bold_inp">
             <div class="bold">账号</div>
             <input v-model="number"  class="b_input" type="text" placeholder="请输入手机号/邮箱">
             <div class="delete"></div>
           </div>
           <div class="passworld">
             <div class="bold">密码</div>
             <input v-model="password" class="b_input" type="text" placeholder="请输入密码">
             <div class="watch"></div>
           </div>
           <div class="passworld">
             <div class="bold">校验码</div>
             <input  class="b_input" type="text">
           </div>
         </div>
         <div class="number" v-if="active2 === 1">
         <div class="bold_inp">
           <div class="bold">校验码</div>
           <input  class="b_input" type="text">
           <div class="delete"></div>
         </div>
         <div class="passworld">
           <div class="bold">手机号</div>
           <input  class="b_input" type="text" placeholder="请输入手机号">
           <div class="watch"></div>
         </div>
         <div class="passworld">
           <div class="bold">验证码</div>
           <input  class="b_input" type="text">
         </div>
       </div>
        <mu-container>
          <mu-tabs class="login_btn" color="#ccc" full-width indicator-color="#ccc">
            <mu-tab>登录</mu-tab>
          </mu-tabs>
        </mu-container>
         <div class="bottom_btn">
            <div class="forget_pwd">忘记密码</div>
            <div class="reg">注册</div>
         </div>
   </div>
</template>

<script>
    import {mapActions} from 'vuex' // 引入辅助函数
    export default {
      name: 'Personallogin',
      data () {
        return {
          active2: 0,
          number: '',
          password: ''
        };
      },
      methods:{
        ...mapActions(['closePersonal'])
      }
    }

</script>

<style scoped>
  .personal {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 300;
    background: #fff;
  }
  .bookbar {
    width: 100%;
    height: 43px;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  .bookbar .login {
    font-size: 16px;
  }
  .person_bar {
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .login-input-wrap {
    width: 319px;
    height: 122px;
    margin: 20px 15px 10px 28px;
  }
  .number {
    width: 319px;
    height: 122px;
    margin: 20px 15px 10px 28px;
  }
  .bold {
    height: 26px;
    font-size: 16px;
    display: inline-block;
  }
  .bold_inp {
    border-bottom: 1px solid #f3f3f3;
  }
  .passworld {
    margin-top: 20px;
    border-bottom: 1px solid #f3f3f3;
  }
  .b_input {
    border: 0;
    width: 195px;
    height: 26px;
    font-size: 16px;
    margin-left: 20px;
    outline: none;
  }
  .title_p {
    font-size: 16px;
    color: #353d3c;
  }
  .login_btn {
    width: 319px;
    height: 44px;
    border-radius: 5px;
    margin: 20px 15px 10px 20px;
  }
  .bottom_btn {
    position: relative;
    width: 319px;
    height: 14px;
    margin: 0 15px 10px 28px;
  }
  .bottom_btn .forget_pwd {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 56px;
    height: 14px;
    font-size: 12px;
  }
  .bottom_btn .reg {
    position: absolute;
    right: 0;
    width: 28px;
    height: 14px;
    color: #00C98D;
    font-size: 12px;
    display: inline-block;
  }
</style>

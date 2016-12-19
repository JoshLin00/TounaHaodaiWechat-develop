<!-- 注册 -->
<template>
  <div class="container-register">
    <text-input
      :value="phone"
      @input="phoneInput"
      :maxlength="11"
      placeholder="请输入手机号"
      type="tel"
    />
    <div class="hairline"></div>
    <pic-code-input  
        :value="picCode"
        @input="picCodeInput"
        :maxlength="4"
        placeholder="请输入图形验证码"
        type="text"
      />   
    <div class="hairline"></div>
    <sms-code-input
      ref="smsCodeInput"
      :value="smsCode"
      @input="smsCodeInput"
      :totalTime="60"
      @btnClick="smsCodeBtnClick"
      :class="{'btn-sms-code-disabled': btnSmsCodeDisabled}"
      :maxlength="6"
      placeholder="请输入短信验证码"
      type="text"
    />
    <div class="hairline"></div>
    <password-input
        :value="password"
        @input="passwordInput"
        :maxlength="20"
        placeholder="设置密码"
        type="password"
      />
      <div class="hairline"></div>
      <div class="link-agree">注册即表示同意<router-link to="/">《投哪好贷注册协议》</router-link></div>
    <mt-button :disabled="btnDisabled" @click.native="goNextStep" type="primary" class="btn-next-step">立即注册</mt-button>
    <div class="link-register">已有投哪账号，<router-link to="/member/login">点击登录</router-link></div>
    <img src="../assets/images/common/footerBanner.png" class="footerBanner">
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  import TextInput from '../components/input/TextInput';
  import PicCodeInput from '../components/input/PicCodeInput';
  import SmsCodeInput from '../components/input/SmsCodeInput';
  import PasswordInput from '../components/input/PasswordInput';

  export default {
    name: 'register',
    data() {
      return {
        phone: '',  // 手机号
        picCode: '',        // 图形验证码
        smsCode: '',  //短信验证码
        btnSmsCodeDisabled: false,   //短信验证码不可获取
        btnDisabled: true,  // 按钮不可点击

      }
    },
    created: function() {
      this.$store.commit('COMMON_CONFIG', { // 组件创建的时候，去修改connon.js中配置项的状态
        showNavbar: false,   // 显示navbar
        showBackBtn: false,  // 显示返回按钮
        title: ' ',          // 页面标题
        showTabbar: false,  // 不显示tabbar
      });
    },
    computed: {
      btnDisabled() {
        return this.phone.length == 11 ? false : true;
      },
      btnSmsCodeDisabled(){
        return this.picCode.length < 4 ? true : false;
      }
    },
    methods: {
      phoneInput(val) {       // 手机号码输入
        this.phone = val;
      },
      picCodeInput(val) {       // 图形验证码输入
        this.picCode = val;
      },
      smsCodeInput(val) {     // 短信验证码输入
        this.smsCode = val;
      },
      smsCodeBtnClick() {       // 获取短信验证码按钮点击事件
        if(this.picCode.length < 4) {
          Toast({ message: '请输入正确的图形验证码 '});
          return false;
        }
        this.$refs.smsCodeInput.startCountDown();
      },
      passwordInput(val) {       // 密码输入
        this.password = val;
      },
      goNextStep() {
        let regPhone = /^1(3|4|5|7|8)\d{9}$/; // 验证手机号格式是否正确
        if(this.phone.match(regPhone) == null) {
          Toast({
            message: '请输入正确的手机号',
            duration: 4000,
          });
          return false;
        }
        // 跳转到下一步页面，并且把手机号通过url传过去
        //this.$router.push({ path: '/member/login/register01/register02', query: { phone: this.phone }});
      }
    },
    components: {
      TextInput,
      PicCodeInput,
      SmsCodeInput,
      PasswordInput,
    }
  }
</script>

<style lang="scss">
  .container-register {
    padding: 0 0.25rem;
    .inputContainer{
      height: 0.45rem;
    }
  }
  .link-agree {
  display: block;
  color: grey;
  font-size: 13px;
  margin: .08rem 0;
  a{color:#278cde;}
} 
  .register-tip {
    margin: .3rem 0 .2rem;
    font-size: 14px;
    color: #333;
  }
  .btn-next-step {
    width: 100%;
    margin-top: .45rem;
  }
</style>

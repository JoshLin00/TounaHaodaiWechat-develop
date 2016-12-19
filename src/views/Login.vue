<!-- 登录 -->
<template>
  <div class="container-login">
    <div class="form-login">
      <!-- 用户名输入框 -->
      <text-input
        :leftIcon="iconIphone"
        :value="username"
        @input="usernameInput"
        type="tel"
        :maxlength="11"
        placeholder="请输入手机号"
        class="input-login"
      />
      <div class="hairline"></div>
      <!-- 密码输入框 -->
      <password-input
        :leftIcon="iconLock"
        :value="password"
        @input="passwordInput"
        :maxlength="20"
        placeholder="请输入密码"
        type="password"
        class="input-login"
      />
      <div v-if="isNeedPicCode" class="hairline"></div>
      <!-- 用户名或密码输错超过3次需要输入图形验证码 -->
      <pic-code-input
        v-if="isNeedPicCode"
        :value="picCode"
        @input="picCodeInput"
        :maxlength="4"
        placeholder="请输入图形验证码"
        type="text"
        class="input-login"
      />   
    </div>
    <div class="link-forget-password">
      <router-link to="/">忘记密码</router-link>
    </div>
    <!-- 登录按钮 -->
      <mt-button @click.native="submit" :disabled="btnDisabled" type="primary" class="btn-login">登录</mt-button>
    <div class="link-register">
      没有账号?<router-link to="/member/login/register">立即注册</router-link>
    </div>
    <img src="../assets/images/common/footerBanner.png" class="footerBanner">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import IconIphone from '../assets/images/components/login/login_icon_01.png';
  import IconLock from '../assets/images/components/login/login_icon_03.png';

  
  import TextInput from '../components/input/TextInput';
  import PasswordInput from '../components/input/PasswordInput';
  import PicCodeInput from '../components/input/PicCodeInput';

  export default {
    name: 'login',
    data() {
      return {
        username: '',       // 用户名
        password: '',       // 密码
        picCode: '',        // 图形验证码
        isNeedPicCode: false,   // 是否需要输入图形验证码
        btnDisabled: true,      // 注册按钮是否可点击
        iconIphone: IconIphone, // 图标
        iconLock: IconLock,     // 图标
      }
    },
    created: function() {
      this.$store.commit('COMMON_CONFIG', { // 组件创建的时候，去修改connon.js中配置项的状态
        showNavbar: false,  // 不显示navbar
        showTabbar: false,  // 不显示tabbar
      });
    },
    computed: {
      btnDisabled() {
        return false;
      },
      ...mapGetters({
        isLogin: 'isLogin',
        isVc: 'isVc',
      }),
    },
    methods: {
      usernameInput(val) {
        this.username = val;
      },
      passwordInput(val) {
        this.password = val;
      },
      picCodeInput(val) {
        this.picCode = val;
      },
      submit() {
        console.log(this.username);
        console.log(this.password);

        this.$store.dispatch('login', {
          username: this.username,
          md5Pwd: this.password,
          validCode: this.picCode
        });
      }
    },
    watch: {
      isLogin() {
        if(this.isLogin === true) {
          this.$router.go(-1);
          // this.$router.push({path: '/member'});
        }
      },
      isVc() {
        if(this.isVc === true) {
          this.isNeedPicCode = true;
        }
      }
    },
    components: {
      TextInput,
      PasswordInput,
      PicCodeInput,
    }
  }
</script>

<style lang="scss">
  .container-login {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    height: 100%;
    min-height: 520px; 
    background-size: cover;
    .form-login {
      margin-top: 0.2rem;
      background: #f5f5f5;
      padding: 0 0.25rem;
    }
    .input-login{
      height: 0.45rem;
      input {color: grey;}
    } 
    .btn-login {
      display:block;
      margin:0.3rem 0.25rem 0;
    }
    .link-forget-password {
      display: flex;
      displey: -webkit-flex;
      justify-content: flex-end;
      padding: .15rem;
    }
    .link-forget-password a{
      padding: .1rem;
      font-size: 14px;
      color: grey;
    }
    
  }
.link-register {
  display: block;
  text-align: center;
  color: grey;
  font-size: 13px;
  margin: .3rem .2rem .1rem 0;
  a{color:#278cde;}
} 
.footerBanner{
  position: absolute;
  bottom: 0.15rem;
  left: 0;
  right: 0;
  margin: auto;
  display: block;
  width:1.435rem;
}

</style>

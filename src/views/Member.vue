<!-- 我的 -->
<template>
  <div class="container-member">
    <div class="header">
      <div class="avatar">
        <img src="../assets/images/components/member/avatar_no_login@2x.png">
      </div>
      <div v-if="isLogin === true && userinfo.realstatus === true" class="userinfo-container">
        <p class="userinfo-text">{{userinfo.name}}</p>
        <p class="userinfo-text">{{userinfo.phone}}</p>
      </div>
      <div v-if="isLogin === true && userinfo.realstatus === false" class="userinfo-container">
        <router-link to="/member/login" class="btn-not-certification">
          <img src="../assets/images/components/member/certification@2x.png" style="width:9px; margin-right: 3px;">
          未认证
          <img src="../assets/images/components/member/jiantou@2x.png" style="width:6px; margin-left: 3px;">
        </router-link>
        <p class="userinfo-text">{{userinfo.phone}}</p>
      </div>
      <div v-if="isLogin === false" class="userinfo-container">
        <router-link to="/member/login" class="btn-login-register">请登录/注册</router-link>
      </div>

    </div>

    <div class="cells">
      <mt-cell
        title="个人资料"
        to="/member/personal"
        is-link
        >
        <img slot="icon" src="../assets/images/components/member/user_info@2x.png" width="20" height="20">
      </mt-cell>
      <mt-cell
        title="我的借款"
        to="/member"
        is-link
        >
        <img slot="icon" src="../assets/images/components/member/loan@2x.png" width="20" height="20">
      </mt-cell>
    </div>

    <div class="cells">
      <mt-cell
        title="品牌介绍"
        to="/member/brandIntr"
        is-link
        >
        <img slot="icon" src="../assets/images/components/member/brands@2x.png" width="20" height="20">
      </mt-cell>
      <mt-cell
        title="设置"
        to="/member"
        is-link
        >
        <img slot="icon" src="../assets/images/components/member/setting@2x.png" width="20" height="20">
      </mt-cell>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'member',
    data() {
      return {

      }
    },
    created: function() {
      this.$store.commit('COMMON_CONFIG', { // 组件创建的时候，去修改connon.js中配置项的状态
        showTabbar: true,   // 显示tabbar
      });
    },
    computed: {
      ...mapGetters({
        isLogin: 'isLogin',
        userinfo: 'userinfo',
      })
    }
  }
</script>

<style>
  .container-member {
    background-color: #f4f4f4;
  }
  .header {
    width: 100%;
    height: 2rem;
    padding-top: 0.6rem;
    background: url(../assets/images/components/member/background@2x.png) no-repeat;
    background-size: contain;
  }
  .avatar {
    width: 0.75rem;
    height: 0.75rem;
    margin: 0 auto;
  }
  .avatar img {
    max-width: 100%;
  }
  .userinfo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
  }
  .userinfo-text {
    margin-bottom: 5px;
    font-size: 14px;
    color: #fff;
  }
  .btn-login-register, .btn-not-certification {
    margin-bottom: 5px;
    padding: 4px 8px;
    font-size: 13px;
    color: #fff;
    background-color: rgb(70,120,195);
    border-radius: 10px;
  }
  .btn-not-certification {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cells {
    margin-top: 10px;
  }
</style>

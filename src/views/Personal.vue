<!-- 个人资料 -->
<template>
  <div class="personal">
    <mt-swipe :show-indicators="false" :auto="5000" class="swipe-home">
      <mt-swipe-item>
        <img class="swipe-img" src="../assets/images/components/userInfoHome/banner@2x.png">
      </mt-swipe-item>
    </mt-swipe>
    <div class="cells">
      <mt-cell title="基本信息" to="/member/personal/baseinfo" is-link>
        <img slot="icon" src="../assets/images/components/member/user_info@2x.png" width="20" height="20">
        <span> <img slot="icon" src="../assets/images/components/userInfoHome/complete@2x.png" width="17" height="17"> </span>
      </mt-cell>
      <mt-cell title="车辆信息" to="/member/personal/carinfo" is-link>
        <img slot="icon" src="../assets/images/components/userInfoHome/car@2x.png" width="20" height="20">
        <span > <img slot="icon" src="../assets/images/components/userInfoHome/complete@2x.png" width="17" height="17"> </span>
      </mt-cell>
  
      <mt-cell title="联系人" to="/member/personal/contactsInfo" is-link>
        <img slot="icon" src="../assets/images/components/userInfoHome/contacts@2x.png" width="20" height="20">
        <span> <img slot="icon" src="../assets/images/components/userInfoHome/complete@2x.png" width="17" height="17"> </span>
      </mt-cell>
      <mt-cell title="手机认证" to="/" is-link>
        <img slot="icon" src="../assets/images/components/userInfoHome/phone@2x.png" width="20" height="20">
        <span> <img slot="icon" src="../assets/images/components/userInfoHome/complete@2x.png" width="17" height="17"> </span>
      </mt-cell>
      <mt-cell title="上传附件" to="/" is-link>
        <img slot="icon" src="../assets/images/components/userInfoHome/upload@2x.png" width="20" height="20">
        <span> <img slot="icon" src="../assets/images/components/userInfoHome/complete@2x.png" width="17" height="17"> </span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'personal',
     created: function() {
      this.$store.commit('COMMON_CONFIG', { // 组件创建的时候，去修改connon.js中配置项的状态
        showNavbar: false,  // 不显示navbar
        showTabbar: false,   // 显示tabbar
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

<style lang='scss'>
.personal {
  background-color: #f4f4f4;
  .swipe-home {
    height: 1.8rem;
    .swipe-img {
      max-width: 100%;
    }
  }
  .cells {
    margin-top: 0.1rem;
    padding-bottom:2rem;
    background: #fff; 
    .mint-cell{
      min-height: 0.48rem;
      height: 0.5rem;
      font-size: 0.15rem
    }
  }
}
</style>

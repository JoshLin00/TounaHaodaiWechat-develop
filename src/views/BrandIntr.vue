<!-- 品牌介绍 -->
<template>
  <div >
    <img src="../assets/images/components/aboutUs/aboutUs@2x.png" width="100%">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'brandIntr',
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

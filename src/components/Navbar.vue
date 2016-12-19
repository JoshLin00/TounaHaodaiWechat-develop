<template>
  <header class="header-navbar">
    <!-- 返回按钮 -->
    <span
      class="navbar-btn-go-back"
      v-show="showBackBtn"
      @click="goBack"
    >
      <i class="mintui mintui-back"></i>
    </span>
    <!-- 页面标题 -->
    <p class="navbar-title">{{title}}</p>
  </header>
</template>

<script>
  export default {
    name: 'navbar',
    props: {
      showBackBtn: {  // 是否显示返回按钮
        type: Boolean,
      },
      title: {
        type: String, // 页面标题
      }
    },
    data() {
      return {

      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    },
  }
</script>

<style>
  .header-navbar {
    display: flex;
    width: 100%;
    height: .45rem;
    line-height: .45rem;
    flex-direction: row;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #26a2ff;
  }
  .navbar-btn-go-back {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 10px;
    color: #fff;
  }
  .navbar-btn-go-back i{
    font-size: 26px;
  }
  .navbar-title {
    flex: 1;
    text-align: center;
    font-size: 18px;
    color: #fff;
  }
</style>



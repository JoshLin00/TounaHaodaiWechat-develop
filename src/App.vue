<template>
  <div class="main-container">
    <!-- 顶部navbar -->
    <navbar
      v-show="commonConfig.showNavbar"
      :showBackBtn="commonConfig.showBackBtn"
      :title="commonConfig.title"
    />
    <!-- 主体内容区 -->
    <div class="scroll-content">
      <!-- 为页面切换添加动画效果，通过监听router的变化，添加不同的类名 -->
      <transition :name="transitionName" >
        <router-view class="child-view"
          :class="{'has-navbar': commonConfig.showNavbar, 'has-tabbar': commonConfig.showTabbar}"
        ></router-view>
      </transition>
    </div>
    <!-- 底部的tabbar -->
    <tabbar v-show="commonConfig.showTabbar" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from './components/Navbar.vue';
import Tabbar from './components/Tabbar.vue';

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left'
    };
  },
  created:function(){
    if(this.$route.name == undefined){
        this.$router.push('index');     // 默认显示首页
    }
  },
  computed: {
    ...mapGetters({
      commonConfig: 'commonConfig',
    }),
  },
  watch: {
    '$route' (to, from) { // 监听router的变化，添加页面切换的动画效果
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
  },
  components: {
    Navbar,
    Tabbar,
  }
};
</script>

<style>
  .main-container {
    height: 100%;
    color:#757575;
  }
  .scroll-content {
    height: 100%;
    overflow: scroll;
  }
  /* 隐藏滚动条 */
  .scroll-content::-webkit-scrollbar {
    display:none;
  }
  .child-view {
    min-height: 100%;
    transition: all .2s cubic-bezier(.55,0,.1,1);
  }
  .child-view.has-navbar {  /* 如果显示navbar */
    padding-top: .45rem;
  }
  .child-view.has-tabbar {  /* 如果显示tabbar */
    padding-bottom: 50px;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>

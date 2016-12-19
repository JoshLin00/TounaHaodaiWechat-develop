<!-- 首页 -->
<template>
  <div class="container-home">
    <!-- 轮播图 -->
    <mt-swipe :show-indicators="false" :auto="5000" class="swipe-home">
      <mt-swipe-item>
        <img class="swipe-img" src="../assets/images/components/home/banner1@2x.png">
      </mt-swipe-item>
    </mt-swipe>
    <div class="loan-home">
      <!-- 借款金额 -->
      <div class="title">
        <img class="title-img" src="../assets/images/components/home/borrow_amount@2x.png">
        <p class="title-text">借款金额</p>
      </div>
      <!-- <mt-field label=" " placeholder="请输入2万以上的借款金额"></mt-field> -->
      <input v-model="money" class="loan-money" type="text" maxlength="6" name="money" placeholder="请输入2万以上的借款金额">
      <div class="hairline"></div>
      <!-- 借款期数 -->
      <div class="title">
        <img class="title-img" src="../assets/images/components/home/borrow_period@2x.png">
        <p class="title-text">借款期数</p>
      </div>
      <div class="loan-time">{{rangeValue}}期</div>
      <mt-range
        v-model="rangeValue"
        :min="1"
        :max="24"
        :step="1"
        :bar-height="2">
        <!-- <div slot="start">1</div>
        <div slot="end">24</div> -->
      </mt-range>
      <div class="range-text">
        <span>1期</span>
        <span>24期</span>
      </div>
      <mt-button :disabled="btnDisabled" @click.native="submit" type="primary" class="loan-submit">立即借款</mt-button>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
    name: 'index',
    data() {
      return {
        money: '',          // 借款金额
        rangeValue: 12,     // 借款期数
        btnDisabled: true,  // 立即借款按钮是否可点击
      }
    },
    created: function() {
      this.$store.commit('COMMON_CONFIG', { // 组件创建的时候，去修改connon.js中配置项的状态
        showNavbar: false,  // 不显示navbar
        showTabbar: true,   // 显示tabbar
      });
    },
    // watch: {
    //   money(val, oldVal) {
    //     this.btnDisabled = val>=20000 ? false : true; // 输入框中有值，按钮变成可点击
    //   }
    // },
    computed: {
      btnDisabled() {
        return this.money>=20000 ? false : true; // 输入框中有值，按钮变成可点击
      }
    },
    methods: {
      submit() {
        const money = this.money;       // 借款金额
        const time = this.rangeValue;   // 借款期数
        // console.log('money='+money+'    time='+time);
        Toast({
          message: '操作成功',
          duration: 4000,
        });
      }
    }
  };
</script>

<style>
  .swipe-home {
    height: 2rem;
  }
  .swipe-home .swipe-img {
    max-width: 100%;
  }
  .loan-home {
    padding: 0 0.2rem 0.4rem;
  }
  .loan-home .title {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0.2rem 0 0.3rem;
  }
  .title .title-img {
    width: 18px;
    height: 18px;
  }
  .title .title-text {
    margin-left: 12px;
    font-size: 14px;
  }
  .loan-money {
    width: 100%;
    padding: 8px 0;
    text-align: center;
    font-size: 16px;
    outline: none;
    border: none;
    color:#000;
  }
  .hairline {
    border-top: 1px solid #ccc;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .loan-time {
    padding-bottom: 12px;
    text-align: center;
  }
  .mt-range-thumb{
    background-color:#26a2ff;
  }
  .range-text {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .range-text span {
    font-size: 13px;
  }
  .loan-submit {
    width: 100%;
    margin-top: 0.6rem;
  }
</style>

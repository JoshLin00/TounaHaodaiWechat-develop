<!-- 车辆信息 -->
<template>
  <div class="info carinfo">
    <div class="base-cell">
      <text-input label="车牌号" type="text" placeholder="请输入车牌号码" />
      <div class="hairline"></div>
      <text-input label="品牌型号" type="text" placeholder="请选择品牌型号" :rightIcon="iconInvisible"/>
      <div class="hairline"></div>
      <text-input label="公里数" type="text" value="公里"/>
    </div>
    <div class="base-cell">
      <text-input label="购买时间" type="text"  :rightIcon="iconInvisible" />
      <div class="hairline"></div>
      <text-input label="车辆上牌时间" type="text" :rightIcon="iconInvisible"/>
      <div class="hairline"></div>
      <text-input label="购买方式" type="text"/>
    </div>
    <div class="base-cell">
      <text-input label="车辆型号" type="text" placeholder="选填" />
      <div class="hairline"></div>
      <text-input label="发动机型号" type="text" placeholder="选填" />
      <div class="hairline"></div>
      <text-input label="车架号" type="text" placeholder="选填" />
    </div>
    <mt-button @click.native="submit" :disabled="btnDisabled" type="primary" class="btn-save">保存信息</mt-button>
  </div>
</template>

<script>
import TextInput from '../components/input/TextInput';
  import IconInvisible from '../assets/images/components/borrow/arrow_right@2x.png';
  import { mapGetters } from 'vuex';
  export default {
    name: 'carInfo',
    data(){
      return{
        iconInvisible: IconInvisible, // 图标
      }
    },
    computed: {
      btnDisabled() {
        return true;
        //return (this.username.toString().length==11 && this.password.toString().length>=6) ? false : true;
      },
      ...mapGetters({
        isLogin: 'isLogin',
        userinfo: 'userinfo',

      })
    },
    components: {
      TextInput,
    }
  }
</script>

<style lang="scss">
.baseinfo{
  background-color:#f4f4f4;
  padding-bottom:0.2rem;
  .base-cell{
    padding: 0 0.2rem;
    background-color:#fff;
    margin-bottom:0.2rem;
  }
  .inputContainer{    
    height: 0.5rem;
    line-height: 0.5rem;
    input{
      text-align: right;
    }
  }
}
  .btn-save{
    width:86%;
    margin:0 7%;
  }
</style>

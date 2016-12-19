<!-- 图形验证码输入框组件 -->
<template>
  <div class="inputContainer">
    <!-- 输入框左边的icon -->
    <img
      v-if="leftIcon"
      :src="leftIcon"
      class="leftIcon"
    />
    <!-- 输入框左边的文字 -->
    <label v-if="label">{{label}}</label>
    <!-- 输入框，父组件需要监听'input'或者'change'事件，拿到输入框的值 -->
    <input
      class="input"
      :value="currentValue"
      @input="handleInput"
      @change="$emit('change', currentValue)"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :minlength="minlength"
      :maxlength="maxlength"
      :min="min"
      :max="max"
      :placeholder="placeholder"
    />
    <!-- 输入框右边的icon -->
    <img
      :src="picUrl"
      @click="refreshPicUrl"
      class="rightPic"
    />
  </div>
</template>

<script>
  import { HD_API_HOST } from '../../config';

  export default {
    name: 'PicCodeInput',
    /* 类型检查 */
    props: {
      leftIcon: {             // 输入框左边的icon
        type: String,
      },
      label: String,          // 输入框左边的文字
      value: {                // 输入框的值
        type: null,
        default: '',
      },
      type: {                 // 输入框的类型
        type: String,
      },
      disabled: {             // 不可用
        type: Boolean,
        default: false,
      },
      readonly: {             // 只读
        type: Boolean,
        default: false,
      },
      minlength: Number,      // 最小长度
      maxlength: Number,      // 最大长度
      min: Number,            // 最小值
      max: Number,            // 最大值
      placeholder: {          // 输入框placeholder文字
        type: String,
        default: '',
      },
    },
    data() {
      return {
        picUrl: HD_API_HOST + 'tounacn/vc.do?t=' + Math.round(new Date().getTime()), // 图形验证码url
        currentValue: this.value,   // 将props中value的值作为输入框的初始值
      }
    },
    methods: {
      handleInput(event) {
        this.currentValue = event.target.value;
      },
      refreshPicUrl() {
        this.picUrl = HD_API_HOST + 'tounacn/vc.do?t=' + Math.round(new Date().getTime());
      },
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },
      currentValue(val) {
        this.$emit('input', val);
      },
    },
  }
</script>

<style lang="scss">
  .inputContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    .leftIcon {
      width: 0.1rem;
      height: 0.15rem;
      margin: 0 10px;
    }
    .rightPic {
      width: 80px;
      margin: 0 10px;
    }
    .input {
      flex: 1;
      padding: 6px 5px;
      font-size: 14px;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }
  
</style>

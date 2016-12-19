<!-- 密码输入框组件 -->
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
    <!-- 输入框右边的显示或隐藏密码icon -->
    <img
      v-if="rightIconInvisible"
      :src="rightIcon"
      @click="toggleShow"
      class="rightIcon"
    />
  </div>
</template>

<script>
  export default {
    name: 'PasswordInput',
    /* 类型检查 */
    props: {
      leftIcon: {             // 输入框左边的icon
        type: String,
      },
      rightIconInvisible: {   // 输入框右边隐藏密码的icon
        type: String,
      },
      rightIconVisible: {     // 输入框右边显示密码的icon
        type: String,
      },
      label: String,          // 输入框左边的文字
      value: {                // 输入框的值
        type: null,
        default: '',
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
        rightIcon: this.rightIconInvisible,
        currentValue: this.value,   // 将props中value的值作为输入框的初始值
        type: 'password',
      }
    },
    methods: {
      handleInput(event) {
        this.currentValue = event.target.value;
      },
      toggleShow() {                // 显示或隐藏密码
        this.type = this.type === 'password' ? 'text' : 'password';
        this.rightIcon = this.rightIcon === this.rightIconInvisible ? this.rightIconVisible : this.rightIconInvisible;
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
    .leftIcon, .rightIcon {
      width: 0.1rem;
      height: 0.15rem;
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

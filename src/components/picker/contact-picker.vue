<template>
  <mt-popup v-model="visible" position="bottom" class="ui-contact">
    <mt-picker
      :slots="dataSlots"
      @change="onChange"
      :visible-item-count="4"
      class="ui-contact-picker"
      ref="picker"
      show-toolbar>
      <span class="ui-contact-action ui-contact-cancel" @click="visible = false">{{ cancelText }}</span>
      <span class="ui-contact-action ui-contact-confirm" @click="confirm">{{ confirmText }}</span>
    </mt-picker>
  </mt-popup>
</template>

<script>

  export default {
    name: 'ui-contact-picker',

    props: {
      cancelText: {
        type: String,
        default: '取消'
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      tpye: {
        type: String,
        default: 'contact'
      },
      startData: {
        type: String,
        default: '{value}'
      },
      
    }
  }
</script>

<style lang="css">
  @component-namespace ui {
    @component contact {
      width: 100%;
      .picker-slot-wrapper, .picker-item {
        backface-visibility: hidden;
      }
      .picker-toolbar {
        border-bottom: 1px solid #eaeaea;
      }
      @descendent action {
        display: inline-block;
        width: 50%;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: $color-blue;
      }
      @descendent cancel {
        float: left;
      }
      @descendent confirm {
        float: right;
      }
    }
  }
</style>
<!--
 * @Author: your name
 * @Date: 2020-07-01 21:07:07
 * @LastEditTime: 2020-07-13 20:33:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/components/Modal.vue
-->
<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:" class="icon-close iconfont" v-on:click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:" class="btn" v-if="btnType=='1'" v-on:click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:" class="btn" v-if="btnType=='2'" v-on:click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType=='3'">
            <a href="javascript:" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:" class="btn btn-default" v-on:click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'modal',
  props: {
    // 弹框类型：小small、中middle、大large、表单form
    modalType: {
      type: String,
      default: 'form'
    },
    // 弹框标题
    title: String,
    // 按钮类型: 1:确定按钮 2：取消按钮 3：确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>
<style lang="sass" scoped>
@import url('//at.alicdn.com/t/font_1894585_x2zqhx8zpfs.css')
@import './../assets/sass/config'
@import './../assets/sass/mixin'
@import './../assets/sass/modal'
@import './../assets/sass/button'
</style>

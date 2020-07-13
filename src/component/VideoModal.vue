<!--
 * @Author: your name
 * @Date: 2020-07-09 11:37:23
 * @LastEditTime: 2020-07-13 17:39:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/VideoModal.vue
-->
<template>
  <div class="video-modal">
    <div class="video-box" v-if="showSlideComputed">
      <div class="video-mask"
      v-if="showSlideComputed === 'slideDown'"
      @click="closeVideo"
      ></div>
      <div class="video">
        <div class="close-icon iconfont" @click="closeVideo">{{title}}</div>
        <video controls="controls" autoplay :src="src"></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video-modal',
  props: {
    showSlide: String,
    videoLists: Array,
    index: Number
  },
  data () {
    return {
      product: {} // 商品信息
    }
  },
  computed: {
    showSlideComputed () {
      return this.showSlide
    },
    src () {
      return this.videoLists[this.index].src
    },
    title () {
      return this.videoLists[this.index].title
    }
  },
  methods: {
    closeVideo () {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'
.video-modal
  height: 100%

  .video-box
    height: 100%

    .video-mask
      position: fixed
      top: 0
      z-index: 999
      height: 100%
      width: 100%
      background-color: #333
      opacity: .5

    @keyframes slideDown
      from
      top: -50%
        opacity: 0
      to
      top: 50%
        opacity: 1

    @keyframes slideUp
      from
      top: 50%
        opacity: 1
      to
      top: -50%
        opacity: 0

    .video
      position: fixed
      top: -50%
      left: 50%
      z-index: 1001
      height: 536px
      width: 1000px
      transform: translate(-50%, -50%)
      opacity: 1

      &.slideDown
        animation: slideDown .6s linear
        top: 50%

      &.slideUp
        animation: slideUp .6s linear

      .close-icon
        position: relative
        top: 80px
        height: 80px
        width: 100%
        padding-left: 20px
        line-height: 80px
        font-size: 18px
        background: #fff

      .close-icon:hover:after
        color: red
        transform: scale(1.5)
        transition: all 1s

      .close-icon:after
        content: '\e653'
        position: fixed
        right: 20px
        top: 80px
        z-index: 9999
        font-size: 30px
        color: #333
        background-color: transparent
        cursor: pointer
        transition: 1s all

      video
        height: 100%
        width: 100%
        object-fit: cover
        outline: none

  .video-bg
    width: 1126px
    height: 540px
    margin: 0 auto
    background: pink
    background-size: cover
    cursor: pointer

</style>

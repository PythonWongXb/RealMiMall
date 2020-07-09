<!--
 * @Author: your name
 * @Date: 2020-07-09 11:37:23
 * @LastEditTime: 2020-07-09 15:44:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/VideoModal.vue
-->
<template>
  <div class="video-modal">
    <div class="video-box" v-if="s">
      <div class="video-mask" v-if="s === 'slideDown'" @click="closeVideo"></div>
      <div class="video" :class="s">
        <div class="close-icon iconfont" @click="closeVideo">{{title}}</div>
        <video
          controls="controls"
          autoplay
          :src="src"
        ></video>
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
    s () {
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
      height: 100%
      width: 100%
      background-color: #333
      opacity: 0.5
      z-index: 1000

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
      transform: translate(-50%, -50%)
      height: 536px
      width: 1000px
      z-index: 1001
      opacity: 1
      &.slideDown
        animation: slideDown 0.6s linear
        top: 50%

      &.slideUp
        animation: slideUp 0.6s linear

      .close-icon
        height: 80px
        width: 100%
        background: #fff
        position: relative
        top: 80px
        line-height: 80px
        font-size: 18px
        padding-left: 20px
      .close-icon:hover::after
        color: red
        transform: scale(1.5)
        transition: all 1s

      .close-icon:after
        transition: 1s all
        position: fixed
        right: 20px
        top: 80px
        content: '\e653'
        z-index: 9999999
        color: #333
        background-color: transparent
        font-size: 30px
        cursor: pointer

      video
        height: 100%
        width: 100%
        object-fit: cover
        outline: none

  .video-bg
    background: pink
    background-size: cover
    width: 1126px
    height: 540px
    margin: 0 auto
    cursor: pointer

</style>

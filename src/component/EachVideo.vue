<!--
 * @Author: your name
 * @Date: 2020-07-09 09:51:08
 * @LastEditTime: 2020-07-13 20:22:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/EachVideo.vue
-->
<template>
  <div class="each-video">
    <div class="topimg" @click="EmitChange">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90" title="点击播放视频" />
      <span>
        <i></i>
      </span>
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EachVideo',
  props: {
    desc: String,
    title: String
  },
  methods: {
    EmitChange () {
      this.$emit('change')
      this.$emit('record')
    }
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.each-video
  height: 285px
  width: calc(25% - 10.5px)
  margin-right: 14px
  text-align: center
  background: $colorG
  transition: transform .5s
  cursor: pointer
  &:nth-child(4n)
    margin-right: 0
  &:hover
    transform: translateY(-5px)
    @include shadow()
  .topimg
    position: relative
    height: 180px
    margin-bottom: 28px
    &:hover
      span
        background: $colorA
        i
          color: $colorG

    span
      position: absolute
      left: 20px
      bottom: 10px
      display: flex
      align-items: center
      justify-content: center
      width: 32px
      height: 20px
      border: 2px solid #fff
      border-radius: 12px
      background-color: rgba(0,0,0,.6)
      color: #fff
      transition: all .2s

      i
        line-height: 20px

      i:after
        content: '\e665'
        line-height: 20px

    img
      height: 100%
      width: 100%

  .title
    margin: 0 14px 6px
    font-size: 14px
    font-weight: 400
    text-align: center
    color: #333
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden

  .desc
    height: 18px
    margin: 0 14px
    font-size: 12px
    color: #b0b0b0
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden

</style>

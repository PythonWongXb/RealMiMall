<!--
 * @Author: your name
 * @Date: 2020-07-09 09:04:55
 * @LastEditTime: 2020-07-09 10:54:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/Video.vue
-->
<template>
  <div class="video">
    <div class="container">
      <div class="head">
        <div class="head-index-title">
          视频
        </div>
        <div class="more">
          <i>查看全部</i>
        </div>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video'
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'
.video
  background-color: $colorN
  padding-bottom: 20px
  .container
    .body
      height: 285px
      width: 100%
      display: flex
      flex-wrap: wrap

    .head
      width: 100%
      @include flex()
      .head-index-title
      .more
        font-size: 16px
        line-height: 58px
        color: #424242
        -webkit-transition: all .4s
        transition: all .4s
        cursor: pointer
        &:hover
          color: $colorA
          i::after
            color: $colorG
            background: $colorA
        i
          &::after
            content: '\e65c'
            margin-left: 5px
            height: 20px
            width: 20px
            background: $colorL
            color: $colorG
            border-radius: 50%
</style>

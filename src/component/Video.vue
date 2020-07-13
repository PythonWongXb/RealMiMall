<!--
 * @Author: your name
 * @Date: 2020-07-09 09:04:55
 * @LastEditTime: 2020-07-13 21:02:58
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
  padding-bottom: 20px
  background-color: $colorN

  .container
    .body
      display: flex
      flex-wrap: wrap
      height: 285px
      width: 100%

    .head
      @include flex()
      width: 100%

      .more
        line-height: 58px
        color: #424242
        font-size: 16px
        transition: all .4s
        cursor: pointer

        &:hover
          color: $colorA

          i::after
            background: $colorA
            color: $colorG

        i
          &::after
            content: '\e65c'
            height: 20px
            width: 20px
            margin-left: 5px
            border-radius: 50%
            background: $colorL
            color: $colorG

</style>

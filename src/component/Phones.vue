<!--
 * @Author: your name
 * @Date: 2020-07-08 09:04:44
 * @LastEditTime: 2020-07-08 20:48:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/Phones.vue
-->
<template>
  <div class='phone'>
    <div class="container">
      <div class="head">
        <div class="head-index-title">
          手机
        </div>
        <div class="more">
          <i>查看全部</i>
        </div>
      </div>
      <div class="body">
        <div class="left-part">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90" alt="">
        </div>
        <div class="right-part">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'phone'
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'
.phone
  background: $colorJ
  .container
    @include flexc()
    align-items: flex-start
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
    .body
      height: 614px
      width: 100%
      @include flex()
      .left-part
        height: 100%
        width: 234px
        transition: .5s all
        cursor: pointer
        &:hover
          transform: translateY(-5px)
        img
          height: 100%
          width: 100%
      .right-part
        display: flex
        flex-wrap: wrap
        height: 100%
        flex: 1
        margin-left: 14px
</style>

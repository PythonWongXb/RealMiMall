<!--
 * @Author: your name
 * @Date: 2020-07-07 17:27:10
 * @LastEditTime: 2020-07-07 18:06:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/Banner.vue
-->
<template>
  <div class='banner'>
    <div class="container">
      <div class="title">
        <div class="each-box">
          <i><span class='iconfont icon-xianshimiaosha'></span>小米秒杀</i>
          <i><span class='iconfont icon-xianshimiaosha'></span>小米秒杀</i>
          <i><span class='iconfont icon-xianshimiaosha'></span>小米秒杀</i>
          <i><span class='iconfont icon-xianshimiaosha'></span>小米秒杀</i>
          <i><span class='iconfont icon-xianshimiaosha'></span>小米秒杀</i>
          <i><span class='iconfont icon-xianshimiaosha'></span>小米秒杀</i>
        </div>
      </div>
      <a href="" class="each"><img class="" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d158f243b54d5ec68dd2ac72bd24555d.jpg?w=632&h=340" alt=""></a>
      <a href="" class="each"><img class="" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d158f243b54d5ec68dd2ac72bd24555d.jpg?w=632&h=340" alt=""></a>
      <a href="" class="each"><img class="" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d158f243b54d5ec68dd2ac72bd24555d.jpg?w=632&h=340" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner'
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.banner
  margin-top: 14px
  height: 170px
  width: 100%
  .container
    @include flex()
    height: 170px
    .title
      height: 170px
      width: 234px
      background: #5f5750
      flex-shrink: 0
      .each-box
        height: 100%
        display: flex
        flex-wrap: wrap
        position: relative
        overflow: hidden

        i
          @include flexc()
          width: 33.33%
          height: 50%
          color: $colorO
          justify-content: center
          font-size: 12px
          position: relative
          cursor: pointer
          span
            font-size: 25px
            margin-bottom: 5px
          &:hover
            color: $colorG
        i:after
          top: 6px
          left: 0
          width: 1px
          height: 70px
          position: absolute
          content: ""
          background: #665e57

        i:before
          top: -1px
          left: 6px
          width: 64px
          height: 1px
          position: absolute
          content: ""
          background: #665e57
    .each
      height: 170px
      flex: 1
      margin-left: 14px

</style>

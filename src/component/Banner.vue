<!--
 * @Author: your name
 * @Date: 2020-07-07 17:27:10
 * @LastEditTime: 2020-07-13 17:56:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/Banner.vue
-->
<template>
  <div class="banner">
    <div class="container">
      <div class="title">
        <div class="each-box">
          <i>
            <span class="iconfont icon-xianshimiaosha"></span>小米秒杀
          </i>
          <i>
            <span class="iconfont icon-xianshimiaosha"></span>小米秒杀
          </i>
          <i>
            <span class="iconfont icon-xianshimiaosha"></span>小米秒杀
          </i>
          <i>
            <span class="iconfont icon-xianshimiaosha"></span>小米秒杀
          </i>
          <i>
            <span class="iconfont icon-xianshimiaosha"></span>小米秒杀
          </i>
          <i>
            <span class="iconfont icon-xianshimiaosha"></span>小米秒杀
          </i>
        </div>
      </div>
      <a href class="each-ad" v-for="item in adList" :key="item.id">
        <img :src="item.img" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    adList: Array
  }
}
</script>

<style lang="sass" scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.banner
  height: 170px
  width: 100%
  margin-top: 14px
  margin-bottom: 26px

  .container
    @include flex()
    height: 170px

    .title
      flex-shrink: 0
      height: 170px
      width: 234px
      background: #5f5750

      .each-box
        position: relative
        display: flex
        flex-wrap: wrap
        height: 100%
        overflow: hidden

        i
          position: relative
          @include flexc()
          justify-content: center
          width: 33.33%
          height: 50%
          font-size: 12px
          color: $colorO
          cursor: pointer

          span
            margin-bottom: 5px
            font-size: 25px

          &:hover
            color: $colorG

        i:after
          content: ""
          position: absolute
          top: 6px
          left: 0
          width: 1px
          height: 70px
          background: #665e57

        i:before
          content: ""
          position: absolute
          top: -1px
          left: 6px
          width: 64px
          height: 1px
          background: #665e57

    .each-ad
      flex: 1
      height: 170px
      margin-left: 14px

</style>

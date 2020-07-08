<!--
 * @Author: your name
 * @Date: 2020-07-08 21:51:54
 * @LastEditTime: 2020-07-08 23:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/SpecialBox.vue
-->
<template>
  <div class='special-box'>
    <div class="top">
      <div class="left">
        <div class="title">
          {{ info.title }}
          </div>
          <div class="price">
            {{ info.price }}元
          </div>
        </div>

      <img :src="info.img" alt="">
    </div>
    <div class="bottom">
      <div class="left">
        <div class="title">
          浏览更多
        </div>
        <small class="info">
          {{ info.name }}
        </small>
      </div>
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialBox',
  props: {
    info: Object
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_j1bv0juluw.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'
.special-box
  @include flexc()
  height: 300px
  width: 209px
  .top
    cursor: pointer
    width: 100%
    height: calc( 50% - 7px )
    background-color: $colorG
    @include flex()
    transition: transform .5s
    &:hover
      transform: translateY(-5px)
      @include shadow()
    img
      height: 80px
      width: 80px
    .left
      height: 100%
      flex: 1
      @include flexc()
      justify-content: flex-start
      padding-top: 50px
      padding-left: 30px
      font-size: 14px
      .title
        width: 100%
        color: $colorB
        line-height: 21px
        margin-bottom: 5px
      .price
        width: 100%
        line-height: 21px
        color: $colorA
  .bottom
    cursor: pointer
    transition: transform .5s
    &:hover
      transform: translateY(-5px)
      @include shadow()

    width: 100%
    height: calc( 50% - 7px )
    background-color: $colorG
    @include flex()
    padding: 0px 30px 0 30px
    .title
      font-size: 18px
      color: #333
    small
      color: #757575
    i:after
      content: '\e61f'
      font-size: 48px
      color: $colorA

</style>

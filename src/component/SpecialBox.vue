<!--
 * @Author: your name
 * @Date: 2020-07-08 21:51:54
 * @LastEditTime: 2020-07-13 20:54:53
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

      <img :src="info.img" />
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
    @include flex()
    height: calc( 50% - 7px )
    width: 100%
    background-color: $colorG
    cursor: pointer
    transition: transform .5s

    &:hover
      @include shadow()
      transform: translateY(-5px)

    img
      height: 80px
      width: 80px

    .left
      @include flexc()
      justify-content: flex-start
      flex: 1
      height: 100%
      padding-top: 50px
      padding-left: 30px
      font-size: 14px

      .title
        width: 100%
        margin-bottom: 5px
        line-height: 21px
        color: $colorB

      .price
        width: 100%
        line-height: 21px
        color: $colorA

  .bottom
    @include flex()
    width: 100%
    height: calc( 50% - 7px )
    padding: 0 30px 0 30px
    background-color: $colorG
    cursor: pointer
    transition: transform .5s

    &:hover
      @include shadow()
      transform: translateY(-5px)

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

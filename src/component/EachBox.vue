<!--
 * @Author: your name
 * @Date: 2020-07-09 15:48:20
 * @LastEditTime: 2020-07-13 09:43:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/EachBox.vue
-->
<template>
  <div class="each-box">
    <div class="title iconfont">手机/电话卡</div>
    <div class="sub">
      <div class='subOne' v-for="item in menuList" :key="item.id">
        <div class='subTwo' v-for="eachItem in item" :key="eachItem.id">
          <a href=""><img :src="eachItem ? eachItem.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" /></a>
          <div>{{eachItem ? eachItem.name: '无名'}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'each-box',
  props: {
    menuList: Array
  }
}

</script>
<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.each-box
  height: 100%
  width: 100%
  &:hover
    background: $colorA
  &:hover
    .sub
      display: flex

  .title
    position: relative
    display: flex
    width: calc(100% - 20px)
    padding-left: 30px
    line-height: 42px
    color: $colorG
    &:after
      content: '\e65c'
      position: absolute
      right: 0

  .sub
    display: none
    position: absolute
    left: 234px
    top: 0
    z-index: 2
    height: 460px
    background-color: $colorG
    @include shadow()

    .subOne
      height: 460px

      .subTwo
        @include flex()
        justify-content: flex-start
        height: calc(76.66px)
        width: 223px
        padding-left: 20px
        font-size: 14px
        color: $colorB
        cursor: pointer
        &:hover
          color: $colorA

        img
          height: 40px
          width: 40px
          margin-right: 12px

</style>

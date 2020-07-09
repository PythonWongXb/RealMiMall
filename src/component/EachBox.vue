<!--
 * @Author: your name
 * @Date: 2020-07-09 15:48:20
 * @LastEditTime: 2020-07-09 15:54:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/EachBox.vue
-->
<template>
  <div class="each-box">
    <div class="title iconfont">手机/电话卡</div>
    <div class="sub">
      <div class='subOne' v-for="i in menuList" :key="i.id">
        <div class='subTwo' v-for="j in i" :key="j.id">
          <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
          <div>{{j? j.name: '无名'}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'each-box',
  props: ['menuList']
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
    display: flex
    padding-left: 30px
    color: $colorG
    width: calc(100% - 20px)
    line-height: 35px
    position: relative
    &::after
      content: '\e65c'
      position: absolute
      right: 0

  .sub
    position: absolute
    left: 234px
    top: 0
    height: 460px
    background-color: $colorG
    z-index: 2
    display: none
    @include shadow()
    .subOne
      height: 460px
      .subTwo
        height: calc(76.66px)
        width: 223px
        @include flex()
        justify-content: flex-start
        padding-left: 20px
        color: $colorB
        font-size: 14px
        cursor: pointer
        &:hover
          color: $colorA

        img
          height: 40px
          width: 40px
          margin-right: 12px

</style>

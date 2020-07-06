<!--
 * @Author: your name
 * @Date: 2020-07-06 15:38:38
 * @LastEditTime: 2020-07-06 21:13:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/UserIndex.vue
-->
<template>
  <div class='userindex'>
    <div class='top'>
      <div class="name">Pythonista Wong</div>
      <div class="icon iconfont"></div>
    </div>
    <div class="bottom">
      <div class="bottom-box">
        <div class="">个人中心</div>
        <div class="">晒单评价</div>
        <div class="">我的喜欢</div>
        <div class="">小米账户</div>
        <div class="">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserIndex'
}
</script>

<style lang='sass' scoped>
@import '../assets/sass/mixin'
@import '../assets/sass/base'
@import '../assets/sass/config'
.userindex
  position: relative
  width: 110px
  height: 40px
  margin-right: 16px
  line-height: 40px
  font-size: 12px
  cursor: pointer
  &:hover
    background: $colorG
    color: $colorA
  &:hover
    .bottom
      height: 164px
      box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.15)
      opacity: 1
  .top
    @include flex()

    .name
      padding: 0 5px
      width: 75px
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    .icon
      flex: 1
      text-align: center
      &::after
        content: '\e65b'
        font-size: bold
  .bottom
    position: absolute
    opacity: 0
    color: $colorL
    top: 100%
    height: 0px
    width: 110px
    background: $colorG
    transition: all .4s
    box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.15)
    overflow: hidden
    .bottom-box
      padding: 7px 0
      text-align: center
      height: 164px
      @include flexc()
      div
        height:30px
        width: 100%
        line-height: 30px
        &:hover
          color: $colorA
          background-color:$colorN
</style>

<!--
 * @Author: your name
 * @Date: 2020-07-06 15:31:37
 * @LastEditTime: 2020-07-06 21:46:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/CommonNav.vue
-->
<template>
  <div class="commonNav">
    <div class="container">
      <div class="left-part">
        <a href="javascript:;">
          <span>小米商城</span>
        </a>
        <a href="javascript:;">
          <span>MIUI</span>
        </a>
        <a href="javascript:;">
          <span>loT</span>
        </a>
        <a href="javascript:;">
          <span>云服务</span>
        </a>
        <a href="javascript:;">
          <span>金融</span>
        </a>
        <a href="javascript:;">
          <span>有品</span>
        </a>
        <a href="javascript:;">
          <span>小爱开放平台</span>
        </a>
        <a href="javascript:;">
          <span>企业团购</span>
        </a>
        <a href="javascript:;">
          <span>资质郑照</span>
        </a>
        <a href="javascript:;">
          <span>协议规则</span>
        </a>
        <a href="javascript:;">
          <span>下载app</span>
        </a>
        <a href="javascript:;">
          <span>Select Location</span>
        </a>
      </div>
      <div class="right-part">
        <a v-if="!username" href="javascript:;">登录</a>
        <user-index v-if="username"></user-index>
        <a v-if="!username" href="javascript:;">注册</a>
        <a href="javascript:;">消息通知</a>
        <a class="cart-box" href="javascript:;">
          <div class="cart">
            <i class='icon-circle-users'></i>
            <span>购物车</span>
            <span>({{ cartcount }})</span>
          </div>
          <div class='all-order'>
            什么也没有
          </div>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
import UserIndex from '@/component/UserIndex'

export default {
  name: 'CommonNav',
  data () {
    return {
      // vuex
      username: 'Ppythonista',
      cartcount: 0
    }
  },
  components: {
    UserIndex
  }
}
</script>

<style lang='sass' scoped>
@import '../assets/sass/mixin'
@import '../assets/sass/base'
@import '../assets/sass/config'

.commonNav
  background-color: $colorB
  .container
    @include flex()
    color: $colorL
    height: 40px

    a
      margin-right: 8px
      font-size: 12px
      line-height: 40px
      &:hover
        color: $colorG

    .left-part
    .right-part
      @include flex()
      .cart-box
        position: relative
        display: block
        margin: 0 0 0 22px
        width: 120px
        background: $colorM

        &:hover
          .all-order
            height: 100px
        .cart
          @include flex()
          justify-content: center

          &:hover
            color: $colorA
            background: $colorG
          i
            margin-right: 5px
        .all-order
          color: $colorL
          position: absolute
          height: 0px
          width:316px
          right: 0
          text-align: center
          line-height: 100px
          overflow: hidden
          transition: height .5s
          @include shadow()
</style>

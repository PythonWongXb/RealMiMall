<!--
 * @Author: your name
 * @Date: 2020-06-30 21:32:17
 * @LastEditTime: 2020-07-13 20:52:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/components/ServicsBar.vue
-->
<template>
  <div class="footer-service">
    <div class="container">
      <div class>
        <span class="iconfont icon-fix"></span>
        <a href="javascript:">预约维修服务</a>
      </div>
      <div class>
        <span class="iconfont icon-circle-7"></span>
        <a href="javascript:">预约维修服务</a>
      </div>
      <div class>
        <span class="iconfont icon-circle-7"></span>
        <a href="javascript:">预约维修服务</a>
      </div>
      <div class>
        <span class="iconfont icon-gift"></span>
        <a href="javascript:">预约维修服务</a>
      </div>
      <div class>
        <span class="iconfont icon-icon-1"></span>
        <a href="javascript:">预约维修服务</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceBar'
}
</script>

<style lang='sass' scoped>
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import url('//at.alicdn.com/t/font_1894585_x2zqhx8zpfs.css')

.footer-service
  a
    text-decoration: none
    color: #616161

  .container
    @include flex()
    height: 80px

    div
      @include flex()
      justify-content: center
      flex: 1
      line-height: 12px
      font-size: 16px
      text-align: center
      vertical-align: middle
      color: #616161
      cursor: pointer

      &:hover
        transition: .2s all
        color: #ff6700

      &:hover a
        transition: .5s all
        color: #ff6700

    span[class*='iconfont']
      margin-right: 6px
      line-height: 22px
      font-size: 22px

</style>

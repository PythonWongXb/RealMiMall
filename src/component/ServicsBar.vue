<!--
 * @Author: your name
 * @Date: 2020-06-30 21:32:17
 * @LastEditTime: 2020-07-09 11:15:51
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
    height: 80px
    @include flex()
    div
      flex: 1
      text-align: center
      vertical-align: middle
      font-size: 16px
      color: #616161
      line-height: 12px
      @include flex()
      justify-content: center
      cursor: pointer

      &:hover
        color: #ff6700
        transition: .2s all

      &:hover a
        color: #ff6700
        transition: .5s all

    span[class*='iconfont']
      font-size: 22px
      margin-right: 6px
      line-height: 22px

</style>

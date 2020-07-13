<!--
 * @Author: your name
 * @Date: 2020-07-08 10:51:56
 * @LastEditTime: 2020-07-13 23:20:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/BannerAdv.vue
-->
<template>
  <div class="banner-adv">
    <div class="container">
      <img :src="src" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerAdv',
  props: {
    src: String
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.banner-adv
  background-color: $colorN

  .container
    height: 100%
</style>

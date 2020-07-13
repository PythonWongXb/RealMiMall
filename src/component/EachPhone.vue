<!--
 * @Author: your name
 * @Date: 2020-07-08 09:48:29
 * @LastEditTime: 2020-07-13 20:13:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/EachPhone.vue
-->
<template>
  <div class='each-phone' @click="jump(id)">
    <div class="phone-box">
      <img :src="img" />
      <div class="title-product">{{ title }}</div>
      <div class="info-product">{{ info }}</div>
      <div class="price-product"><span>¥{{ price }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EachPhone',
  props: {
    title: String,
    info: String,
    price: Number,
    img: String,
    id: Number
  },
  methods: {
    jump (id) {
      this.$router.push(`/productintroduce/${id}`)
    }
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.each-phone
  height: 300px
  width: calc( 25% - 10.5px)
  margin-bottom: 14px
  margin-right: 14px
  background: $colorG
  &:nth-child(n+5)
    margin-bottom: 0
  &:nth-child(4n)
    margin-right: 0
  .phone-box
    @include flexc()
    text-align: center
    padding-top: 20px
    img
      height: 160px
    .info-product
      width: 70%
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      margin-top: 5px
    .title-product
      width: 70%
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      margin-top: 20px

</style>

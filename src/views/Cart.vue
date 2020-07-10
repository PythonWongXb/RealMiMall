<!--
 * @Author: your name
 * @Date: 2020-07-06 11:57:30
 * @LastEditTime: 2020-07-10 22:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/Cart.vue
-->
<template>
  <div class='cart'>
    <cart-main></cart-main>
  </div>
</template>

<script>
import CartMain from '../component/cartMain'

export default {
  name: 'cart',
  components: {
    CartMain
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.cart
  margin-top: 20px
</style>

<!--
 * @Author: your name
 * @Date: 2020-07-06 11:58:08
 * @LastEditTime: 2020-07-06 15:36:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/OrderConfirm.vue
-->
<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import OrderHeader from '@/component/OrderHeader'
import CommonFooter from '@/component/CommonFooter'
export default {
  name: 'order',
  components: {
    OrderHeader,
    CommonFooter
  }
}
</script>

<style>
</style>

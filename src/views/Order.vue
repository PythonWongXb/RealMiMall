<!--
 * @Author: your name
 * @Date: 2020-07-06 11:58:08
 * @LastEditTime: 2020-07-10 21:03:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/OrderConfirm.vue
-->
<template>
  <div>
    <order-header
    :title="title"
    :tip="tip"
    ></order-header>
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
  },
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  mounted () {
    const path = this.$route.path
    console.log(path)
    if (path === '/order/confirm') {
      this.title = '订单确认'
      this.tip = 'tip1'
    } else if (path === '/order/list') {
      this.title = '订单列表'
      this.tip = 'tip2'
    } else if (path === '/order/pay') {
      this.title = '订单支付'
      this.tip = 'tip3'
    } else {
      this.title = '购物车'
      this.tip = 'tip4'
    }
  }
}
</script>

<style lang='sass' scoped>
</style>

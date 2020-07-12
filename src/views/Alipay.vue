<!--
 * @Author: your name
 * @Date: 2020-07-06 11:58:44
 * @LastEditTime: 2020-07-12 10:50:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/Alipay.vue
-->
<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import Loading from './../component/Loading'
export default {
  name: 'alipay',
  components: {
    Loading
  },
  data () {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  mounted () {
    this.paySubmit()
  },
  methods: {
    paySubmit () {
      this.axios
        .post('/pay', {
          orderId: this.orderId,
          orderName: 'Vue高仿小米商城',
          amount: 0.01, // 单位元
          payType: 1 // 1支付宝，2微信
        })
        .then(res => {
          this.content = res.content
          setTimeout(() => {
            document.forms[0].submit()
          }, 100)
        })
    }
  }
}
</script>

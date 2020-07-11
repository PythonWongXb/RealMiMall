<!--
 * @Author: your name
 * @Date: 2020-07-06 11:57:58
 * @LastEditTime: 2020-07-11 17:37:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/OrderPay.vue
-->

<template>
  <div class='orderpay'>
    <div class="confirm-context">
      <div class="container">
        <div class="confirm-order-box">
          <div class="confirm-order">
            <i class='icon-icon-test'></i>
            <div class="content">
              <div class="title">订单提交成功！去付款咯～</div>
              <div class="time">请在 <span>0 小时 14 分</span> 内完成支付, 超时后将取消订单</div>
              <div v-if="!flag"  class="info">收货信息：{{ addressInfo }}</div>
            </div>
            <div class="sum">
              <div class="money">应付总额：<span>{{ payment }}</span><i>元</i></div>
              <i class="detail" @click="showDetails">订单详情</i>
            </div>
          </div>
          <div class="order-detail" ref="suborder" :class="{'show': flag}">
            <div class="suborder-box" ref="realsub">
              <div class="order-num">
                <span class='lable'>订单号：</span>
                <span>{{ orderId }}</span>
              </div>
              <div class="reciver">
                <span class='lable'>收货信息：</span> {{ addressInfo }}
              </div>
              <div class="commodity">
                <div class="lable">商品名称：</div>
                <div class="content">
                  <div class='each-product' v-for="item in orderDetail" :key="item.id">
                    <span class='name'>{{ item.productName }}</span>
                    <span class='num'> 数量：{{ item.quantity }}</span>
                    <span class='money'>总价：{{ item.totalPrice }}</span>
                  </div>
                </div>
              </div>
              <div class="receipt">
                <span class="lable">发票信息：</span>
                电子普通发票 个人
              </div>
            </div>
          </div>
        </div>

        <div class="confirm-pay">
          <div class="head">
            请使用以下支付方式付款
          </div>
          <div class="body">
            <each-paybox
            :fatherchoose="choose1"
            :list="payplatform.img"
            :title="payplatform.title"
            :more=0
            :limit="limit"
            @c="c1"
            ></each-paybox>
            <each-paybox
            :fatherchoose="choose2"
            :list="cards"
            :title="paycards.title"
            :more=1
            @change="change"
            :limit="limit"
            @c="c2"
            ></each-paybox>
            <each-paybox
            :fatherchoose="choose3"
            :limit="limit"
            :list="payfast.img"
            :title="payfast.title"
            :more=0
            @c="c3"

            ></each-paybox>
          </div>
        </div>
        <div class="confirm-install-content">
            <each-paybox
            :fatherchoose="choose4"
            :limit="limit"
            :list="paybyday.img"
            :title="paybyday.title"
            :more=0
            @c="c4"
            ></each-paybox>
        </div>
      </div>
    </div>
    <servics-bar></servics-bar>
  </div>
</template>

<script>
import ServicsBar from '../component/ServicsBar'
import EachPaybox from '../component/EachPaybox'
export default {
  name: 'orderpay',
  data () {
    return {
      f: false,
      choose1: 1,
      choose2: 1,
      choose3: 1,
      choose4: 1,
      payplatform: {
        title: '支付平台',
        img: [
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a4f743d0bdb5c048ad9803914a4ea83.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ead8cd015b07ca9f363ef9b6dd5e8e2.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9fcf10ba01a57b7d08d38b6f4ff3dfa8.jpg' }]
      },
      paycards: {
        title: '银行卡及借记卡',
        img: [
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' }]
      },
      payfast: {
        title: '快捷支付',
        img: [
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' }]
      },
      paybyday: {
        title: '分期付款',
        img: [
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg' }]
      },

      orderId: this.$route.query.orderNo,
      limit: 11,
      flag: false,
      addressInfo: '', // 收货人地址
      orderDetail: [], // 订单详情，包含商品列表
      showDetail: false, // 是否显示订单详情
      payType: '', // 支付类型
      showPay: false, // 是否显示微信支付弹框
      payImg: '', // 微信支付的二维码地址
      showPayModal: false, // 是否显示二次支付确认弹框
      payment: 0, // 订单总金额
      T: ''// 定时器ID
    }
  },
  mounted () {
    this.getOrderDetail()
  },
  components: {
    ServicsBar,
    EachPaybox
  },
  computed: {
    cards () {
      return this.paycards.img.slice(0, this.limit)
    }
  },
  methods: {
    getOrderDetail () {
      this.axios.get(`/orders/${this.orderId}`).then((res) => {
        const item = res.shippingVo
        this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`
        this.orderDetail = res.orderItemVoList
        this.payment = res.payment
      })
    },
    showDetails () {
      this.flag = !this.flag
      const s = this.$refs.realsub.offsetHeight
      console.log(s)
      if (this.flag) {
        this.$refs.suborder.style.height = `${s}px`
      } else {
        this.$refs.suborder.style.height = '0'
      }
    },
    change () {
      if (this.limit === 11) {
        this.limit = 99
      } else {
        this.limit = 11
      }
    },
    c1 () {
      this.choose1 = 1
      this.choose2 = 0
      this.choose3 = 0
      this.choose4 = 0
    },
    c2 () {
      this.choose1 = 0
      this.choose2 = 1
      this.choose3 = 0
      this.choose4 = 0
    },
    c3 () {
      this.choose1 = 0
      this.choose2 = 0
      this.choose3 = 1
      this.choose4 = 0
    },
    c4 () {
      this.choose1 = 0
      this.choose2 = 0
      this.choose3 = 0
      this.choose4 = 1
    }
  }
}

</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.orderpay
  .confirm-context
    background: $colorN
    padding-bottom: 30px
    .container
      padding-top: 40px
      padding-bottom: 30px
      .confirm-order-box
        background-color: $colorG
        padding: 50px 50px 20px 50px
        .order-detail
          color: $colorB
          margin-top: 30px
          height: 0
          overflow: hidden
          padding-left: 138px
          transition: all .5s
          overflow: hidden
          &.show
            // height: 200px
          .lable
            display: inline-block
            width: 85px
          &>div
            line-height: 24px
            margin-bottom: 8px
            font-size: 14px
          .suborder-box
            .commodity
              @include flex()
              .lable
                align-self: flex-start
                width: 85px
              .content
                flex: 1
                width: 100%
                .each-product
                  .name
                    display: inline-block
                    width: 150px
                  .num
                    display: inline-block
                    width: 150px
                  .money
                    display: inline-block
                    width: 300px
            .reciver
            .order-num
              border-top: 1px $colorO solid
              padding-top: 20px
              span
                &:last-child
                  color: $colorA
        .confirm-order
          @include flex()
          box-sizing: content-box
          color: #616161
          // height: 107px
          &>i
            font-size: 84px
            color: #83c44e
            align-self: flex-start
          .content
            width: 680px
            margin-left: 50px
            align-self: flex-start
            .time
              line-height: 28px
              font-size: 14px
              margin-bottom: 5px
              span
                color: $colorA
            .title
              font-size: 24px
              font-weight: 400
              line-height: 36px
              color: $colorM
              margin-bottom: 10px
            .info
              line-height: 28px
              font-size: 14px
          .sum
            flex: 1
            text-align: right
            align-self: flex-start

            .money
              font-size: 14px
              margin-bottom: 10px
              span
                font-size: 24px
                font-weight: 400
                line-height: 36px
                color: $colorA
              i
                color: $colorA
                font-size: 14px
            .detail
              font-size: 14px
              cursor: pointer
              &:hover
                color: $colorA
            .detail::after
              content: '\e65b'
              font-weight: 800
              margin-left: 5px

      .confirm-pay
        padding: 30px 48px 44px 48px
        background: $colorG
        margin-top: 30px
        .head
          height: 50px
          margin-bottom: 30px
          border-bottom: 1px solid #e0e0e0
          font-size: 18px
          color: #424242
        .body

      .confirm-install-content
        background: $colorG
        margin-top: 30px
        padding: 30px 48px 20px 48px
</style>

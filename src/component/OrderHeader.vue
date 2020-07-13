<!--
 * @Author: your name
 * @Date: 2020-07-06 15:32:20
 * @LastEditTime: 2020-07-13 20:36:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/OrderHeader.vue
-->
<template>
  <div class='order-header'>
    <div class="head">
      <div class="container">
        <div class="left">
          <div class="header-logo">
            <a href="/index"></a>
          </div>
          <div class="title">{{ title }}</div>
          <div class="tip">{{ tip }}</div>
        </div>
        <div class="right">
          <user-index
          :username="username"
          >
          </user-index>
          <span>|</span>
          <div class="my-order" @click="jumporder">我的订单</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserIndex from '../component/UserIndex'
export default {
  name: 'OrderHeaader',
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    username () {
      return this.$store.state.username
    }
  },
  props: {
    title: String,
    tip: String
  },
  components: {
    UserIndex
  },
  methods: {
    jumporder () {
      location.href = '/order/list'
    }

  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.order-header
  .head
    height: 100px
    font-size: 12px
    background: $colorG
    color: $colorL
    border-bottom: 2px solid $colorA

    .container
      @include flex()
      height: 100%

      .left
        display: flex
        align-items: center

        .title
          margin-left: 43px
          font-weight: 400
          font-size: 28px
          color: $colorM

        .tip
          align-self: center
          margin-left: 20px

      .right
        @include flex()

        span
          margin-left: -16px
          margin-right: 16px

        .my-order
          height: 40px
          width: 80px
          padding: 0 5px
          line-height: 40px
          margin-left: -16px
          text-align: center
          cursor: pointer

          &:hover
            color: $colorA
</style>

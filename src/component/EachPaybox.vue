<!--
 * @Author: your name
 * @Date: 2020-07-11 14:37:40
 * @LastEditTime: 2020-07-13 23:22:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/EachPaybox.vue
-->
<template>
  <div class="each-box">
    <div class="payment-head">{{ title }}</div>
    <div class="payment-body">
      <div
        class="each"
        v-for="(item, index) in list"
        :key="item.id"
        @click="change(index)"
        :class="{'choose':choose === index && fatherchoose === 1}"
      >
        <img :src="item.img" />
      </div>
      <div v-if="more === 1" @click="mores" class="more">{{ contentnew }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'each-paybox',
  props: {
    list: Array,
    title: String,
    more: Number,
    limit: Number,
    fatherchoose: Number
  },
  computed: {
    contentnew () {
      return this.content
    }
  },
  data () {
    return {
      content: '查看更多',
      choose: -1
    }
  },
  methods: {
    mores () {
      if (this.limit === 11) {
        this.content = '取消查看更多'
      } else if (this.limit === 99) {
        this.content = '查看更多'
      }
      this.$emit('change')
    },
    change (index) {
      this.choose = index
      // console.log(index)
      this.$emit('c')
      if (this.choose === 1 && this.title === '支付平台') {
        this.$emit('submitOrder')
      } else if (this.choose === 3 && this.title === '支付平台') {
        this.$emit('submitOrderAlipay')
      } else {
        this.$emit('subother')
      }
    }
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'
.each-box
  &>div
    margin-bottom: 30px

  .payment-head
    margin-bottom: 15px

  .payment-body
    display: flex
    flex-wrap: wrap

    .each
      height: 60px
      width: calc(16.6% - 11.7px)
      margin-top: 14px
      border: 1px solid #ccc
      cursor: pointer

      &:not(:nth-child(n + 7))
        margin-top: 0

      &:not(:nth-child(6n))
        margin-right: 14px

      &:hover
        border-color: red

      &.choose
        border-color: red

      img
        height: 100%
        width: 100%

    .more
      height: 60px
      width: calc(16.6% - 11.7px)
      margin-top: 14px
      line-height: 60px
      font-size: 14px
      text-align: center
      border: 1px solid #ccc
      color: #424242
      cursor: pointer

      &:hover
        border-color: red
</style>

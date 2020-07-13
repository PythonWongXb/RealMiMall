<!--
 * @Author: your name
 * @Date: 2020-07-10 09:24:33
 * @LastEditTime: 2020-07-13 20:41:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/ProductBanner.vue
-->
<template>
  <div class="product-banner">
    <div class="xm-product-box" ref="box">
      <div class="nav-bar">
        <div class="container">
          <h2>{{ name }}</h2>
          <div class="con">
            <div class="left"></div>
            <div class="right">
              <a
                v-if="model === 0"
                class="J_nav_comment"
                href="//www.mi.com/comment/10949.html"
                target="_blank"
                data-stat-id="fd69257a5f11dbdf"
                onclick="_msq.push(['trackEvent','0e5519feb6002210-fd69257a5f11dbdf','//www.mi.com/comment/10949.html','pcpid','undefined'])"
              >用户评价</a>
              <a href='javascript:;' v-if="model === 1" @click="choose=1" :class="{'current': choose===1}">概述</a>
              <span v-if="model === 1">|</span>
              <a href='javascript:;'   @click="choose=2" :class="{'current': choose===2}" v-if="model === 1">参数</a>
              <span v-if="model === 1">|</span>
              <a href='javascript:;'  @click="choose=3" :class="{'current': choose===3}" v-if="model === 1">F码通道</a>
              <span v-if="model === 1">|</span>
              <a href='javascript:;'  @click="choose=4" :class="{'current': choose===4}" v-if="model === 1">咨询客服</a>
              <span v-if="model === 1">|</span>
              <a href v-if="model === 1">用户评价</a>
              <a class="now" v-if="model === 1" @click="jump">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xm-product-box nav-bar-hidden J_nav_hide" :class="{'nav_fix': show}">
      <div class="nav-bar">
        <div class="container">
          <h2>{{ name }}</h2>
          <div class="con">
            <div class="left"></div>
            <div class="right">
              <a
                v-if="model === 0"
                class="J_nav_comment"
                href="//www.mi.com/comment/10949.html"
                target="_blank"
                data-stat-id="fd69257a5f11dbdf"
                onclick="_msq.push(['trackEvent','0e5519feb6002210-fd69257a5f11dbdf','//www.mi.com/comment/10949.html','pcpid','undefined'])"
              >用户评价</a>
              <a href='javascript:;' v-if="model === 1" @click="choose=1" :class="{'current': choose===1}">概述</a>
              <span v-if="model === 1">|</span>
              <a href='javascript:;'   @click="choose=2" :class="{'current': choose===2}" v-if="model === 1">参数</a>
              <span v-if="model === 1">|</span>
              <a href='javascript:;'  @click="choose=3" :class="{'current': choose===3}" v-if="model === 1">F码通道</a>
              <span v-if="model === 1">|</span>
              <a href='javascript:;'  @click="choose=4" :class="{'current': choose===4}" v-if="model === 1">咨询客服</a>
              <span v-if="model === 1">|</span>
              <a href v-if="model === 1">用户评价</a>
              <a class="now" v-if="model === 1" @click="jump">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-banner',
  props: {
    model: Number,
    name: String,
    productId: String
  },
  mounted () {
    window.addEventListener('scroll', this.page)
  },
  data () {
    return {
      h: '',
      show: false,
      choose: 1
    }
  },
  methods: {
    page () {
      const height = window.pageYOffset
      if (height > 203) {
        this.show = true
      } else {
        this.show = false
      }
    },
    jump () {
      this.$router.push(`/productchoose/${this.productId}`)
    }
  },
  computed: {}
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.product-banner
  .add
    height: 10000px

  .xm-product-box
    position: relative
    z-index: 1
    border-top: 1px solid #e0e0e0
    border-bottom: 1px solid #e0e0e0
    box-shadow: 0 5px 5px rgba(0,0,0,.07)
    background: #fff

    .nav-bar
      position: relative
      height: 63px
      width: 100%
      margin-top: 0
      color: #616161

      .container
        @include flex()
        height: 100%

        h2
          line-height: 60px
          font-size: 18px
          font-weight: 400
          color: #424242

        .con
          .right
            @include flex()

            a
              font-size: 14px
              color: #616161

              &:hover
                color: $colorA

              &.current
                color: $colorA

            .now
              width: 118px
              height: 28px
              margin-left: 5px
              line-height: 28px
              font-size: 12px
              text-align: center
              background: $colorA
              color: $colorG
              cursor: pointer

              &:hover
                color: $colorG

            span
              margin: 0 7px
              font-size: 12px
              color: #616161

  .nav-bar-hidden
    position: fixed
    top: -10px
    left: 0
    z-index: 99
    width: 100%
    margin-top: -60px
    transition: margin-top .3s linear
    box-shadow: none

    &.nav_fix
      position: fixed
      top: 0
      margin-top: 0
      border-bottom: 1px solid #e0e0e0
      background: #fff
      box-shadow: 0 5px 5px rgba(0,0,0,.07)

    .nav-bar
      position: relative
      height: 63px
      width: 100%
      margin-top: 0
      color: #616161

      .container
        @include flex()
        height: 100%

        h2
          line-height: 60px
          font-size: 18px
          font-weight: 400
          color: #424242

        .con
          .right
            display: flex

            a
              color: #616161

              &:hover
                color: $colorA

              &.current
                color: $colorA

            .now
              width: 118px
              height: 28px
              line-height: 28px
              font-size: 12px
              cursor: pointer

              &:hover
                color: $colorG
</style>

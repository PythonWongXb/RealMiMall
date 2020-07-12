<!--
 * @Author: your name
 * @Date: 2020-07-06 15:31:37
 * @LastEditTime: 2020-07-12 18:15:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/CommonNav.vue
-->
<template>
  <div class="commonNav">
    <div class="container">
      <div class="left-part">
        <a href="javascript:">
          <span>小米商城</span>
        </a>
        <a href="javascript:">
          <span>MIUI</span>
        </a>
        <a href="javascript:">
          <span>loT</span>
        </a>
        <a href="javascript:">
          <span>云服务</span>
        </a>
        <a href="javascript:">
          <span>金融</span>
        </a>
        <a href="javascript:">
          <span>有品</span>
        </a>
        <a href="javascript:">
          <span>小爱开放平台</span>
        </a>
        <a href="javascript:">
          <span>企业团购</span>
        </a>
        <a href="javascript:">
          <span>资质郑照</span>
        </a>
        <a href="javascript:">
          <span>协议规则</span>
        </a>
        <a href="javascript:">
          <span>下载app</span>
        </a>
        <a href="javascript:">
          <span>Select Location</span>
        </a>
      </div>
      <div class="right-part">
        <a v-if="!username" href="/login">登录</a>
        <user-index v-if="username" :username="username"> </user-index>
        <a v-if="!username" href="javascript:">注册</a>
        <a href="javascript:">消息通知</a>
        <a class="cart-box" href="javascript:">
          <div class="cart" ref="cart" @click="jumpcart">
            <i class="icon-circle-users"></i>
            <span>购物车</span>
            <span>({{ cartCount }})</span>
          </div>
          <div class="all-order" ref="cartBox">
            <loading v-if="loading"></loading>
            <div class="content" ref="realsub">
              <div class="each iconfont" v-for="item in lists" :key="item.id">
                <img
                  :src="
                    item.productMainImage.substr(0, 2) === 'ht'
                      ? item.productMainImage
                      : 'https://i1.mifile.cn/a1/pms_1560151939.71121260!180x180.png'
                  "
                />
                <div class="name">{{ item.productName }}</div>
                <div class="price">{{ item.productPrice }}</div>
                <div class="num">{{ item.quantity }}</div>
                <i class='icon-icon-test1' @click="delProduct(item.productId)"></i>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import UserIndex from '@/component/UserIndex'
import loading from '@/component/Loading'
export default {
  name: 'CommonNav',
  mounted () {
    this.$refs.cart.addEventListener('mouseover', () => {
      this.flag = true
      this.showDetails()
      this.getCartList()
    })
    this.$refs.cartBox.addEventListener('mouseover', () => {
      this.flag = true
      this.showDetails()
      console.log(this.$refs.cart.hover)
    })

    this.$refs.cart.addEventListener('mouseout', () => {
      this.flag = false
      this.showDetails()
      setTimeout(() => {
        this.loading = true
      }, 500)
    })
    this.$refs.cartBox.addEventListener('mouseout', () => {
      if (this.loading) {
        this.loading = false
      }
      this.flag = false
      this.showDetails()
    })
  },
  methods: {
    jumpcart () {
      this.$router.push('/order/cart')
    },
    getCartList () {
      this.axios.get('/carts').then(res => {
        this.lists = res.cartProductVoList
        this.loading = false
        if (this.username) {
          this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
        }
      })
    },
    showDetails () {
      const s = this.$refs.realsub.offsetHeight
      if (this.flag) {
        this.$refs.cartBox.style.height = `${s}px`
      } else {
        this.$refs.cartBox.style.height = '0px'
      }
    },
    delProduct (index) {
      this.axios.delete(`/carts/${index}`).then((res) => {
        this.$message.success('删除成功')
        this.lists = res.cartProductVoList
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
        this.showDetails()
      })
    }
  },
  data () {
    return {
      lists: [],
      loading: true,
      flag: false
    }
  },
  components: {
    UserIndex,
    loading
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    cartCount () {
      return this.$store.state.cartCount
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/mixin'
@import '../assets/sass/base'
@import '../assets/sass/config'
@import url('//at.alicdn.com/t/font_1894585_j1bv0juluw.css')
.commonNav
  background-color: $colorB
  .container
    @include flex()
    color: $colorL
    height: 40px

    a
      margin-right: 8px
      font-size: 12px
      line-height: 40px
      &:hover
        color: $colorG

    .left-part
    .right-part
      @include flex()
      .cart-box
        position: relative
        display: block
        margin: 0 0 0 22px
        width: 120px
        background: $colorM

        // &:hover
        //   .all-order
        //     height: 120px
        .cart
          @include flex()
          justify-content: center

          &:hover
            color: $colorA
            background: $colorG
          i
            margin-right: 5px
        .all-order
          padding: 0 10px
          background: $colorG
          color: $colorL
          position: absolute
          height: 0px
          width:316px
          right: 0
          text-align: center
          // line-height: 100px
          overflow: hidden
          transition: height .5s
          @include shadow()
          z-index: 3
          .content
            .each
              @include flex()
              i
                &:hover
                  color: red
              img
                height: 20px
                width: 20px
              .name
                width: 158px
                overflow: hidden
                text-overflow:ellipsis
                white-space: nowrap
                text-align: left
</style>

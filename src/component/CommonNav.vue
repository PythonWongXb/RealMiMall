<!--
 * @Author: your name
 * @Date: 2020-07-06 15:31:37
 * @LastEditTime: 2020-07-13 20:03:25
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
                <div class="num">X{{ item.quantity }}</div>
                <i class='icon-icon-test1' @click="delProduct(item.productId)"></i>
              </div>
              <div  v-if="cartCount !== 0" class="all-money">
                <div class="left">
                  <div class="top">
                    <span>共{{ cartCount }}件商品</span>
                  </div>
                  <div class="bottom">
                    <span>{{ money }}</span><i>元</i>
                  </div>
                </div>
                <div class="right" @click="jumptocart">
                  去购物车结算
                </div>
              </div>
              <div v-if="cartCount === 0" class="none">购物车中还没有商品，赶紧选购吧！</div>
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
    this.getCartList()
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
      this.axios.get('/carts').then((res) => {
        this.lists = res.cartProductVoList
        this.money = res.cartTotalPrice
        this.loading = false
        if (this.username) {
          this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
        }
      }).catch((res) => {
        if (res.status === 10) {
          this.loading = false
        }
      })
    },
    showDetails () {
      const s = this.$refs.realsub.offsetHeight
      if (this.flag) {
        if (this.cartCount === 0) {
          this.$refs.cartBox.style.height = '100px'
        } else {
          this.$refs.cartBox.style.height = `${s}px`
        }
      } else {
        this.$refs.cartBox.style.height = '0'
      }
    },
    delProduct (index) {
      this.axios.delete(`/carts/${index}`).then((res) => {
        this.$message.success('删除成功')
        this.lists = res.cartProductVoList
        this.money = res.cartTotalPrice
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
        this.showDetails()
      })
    },
    jumptocart () {
      this.$router.push('/order/cart')
    }
  },
  data () {
    return {
      lists: [],
      loading: true,
      flag: false,
      money: 0
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
    height: 40px
    color: $colorL

    a
      margin-right: 8px
      line-height: 40px
      font-size: 12px
      &:hover
        color: $colorG

    .right-part
      @include flex()
      .cart-box
        position: relative
        display: block
        width: 120px
        margin: 0 0 0 22px
        background: $colorM

        .cart
          @include flex()
          justify-content: center
          &:hover
            color: $colorA
            background: $colorG

          i
            margin-right: 5px

        .all-order
          position: absolute
          right: 0
          height: 0
          z-index: 3
          width:316px
          overflow: hidden
          text-align: center
          transition: height .5s
          color: $colorL
          background: $colorG
          @include shadow()
          .content
            .all-money
              @include flex()
              padding: 15px 20px
              background: #fafafa

              .left
                @include flexc()
                width: 100%
                text-align: left

                .top
                  width: 100%
                  margin-bottom: 5px
                  line-height: 12px
                  font-size: 12px

                .bottom
                  display: flex
                  align-items: flex-end
                  flex: 1
                  height: 26px
                  width: 100%
                  line-height: 26px
                  font-size: 12px
                  span
                    line-height: 26px
                    font-size: 24px
                    color: $colorA
                  i
                    line-height: 20px
                    font-size: 12px
                    color: $colorA

              .right
                flex-shrink: 0
                height: 40px
                width: 130px
                color: $colorG
                background: $colorA

            .none
              height: 100px
              line-height: 100px
              font-size: 14px
              color: #424242

            .each
              @include flex()
              justify-content: flex-start
              padding: 5px 10px
              &:hover
                i
                  display: block

              i
                display: none
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

              .price
                width: 50px

              .num
                width: 50px
</style>

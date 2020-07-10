<!--
 * @Author: your name
 * @Date: 2020-07-06 11:57:18
 * @LastEditTime: 2020-07-10 21:44:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/ProductChoose.vue
-->
<template>
  <div class='product-choose'>
    <product-banner
    :productId="Cproduct.id"
    :name="Cproduct.name"
    :model=0
    ></product-banner>
    <div class="head">
      <div class="container">
        <img :src="Cproduct.mainImage" alt="">
      </div>
    </div>
    <div class="body">
      <div class="container">
        <div class="info">
          <div class="title">

          </div>
          <div class="info">

          </div>
          <div class="self">

          </div>
          <div class="special-price">

          </div>
          <div class="address">

          </div>
          <div class="version">

          </div>
          <div class="color">

          </div>
          <div class="other">

          </div>
          <div class="all-money">

          </div>
          <div class="add-cart">
            <div class="cart" @click="jumpcart">
              {{num ? cartcontent: '登录并加入购物车' }}
            </div>
            <div class="like">
              <i class='icon-31guanzhu1xuanzhong'>喜欢</i>
            </div>
            <div class=""></div>
          </div>
          <div class="detail">

          </div>
        </div>
      </div>

    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import ProductBanner from '../component/ProductBanner'

export default {
  name: 'ProductChoose',
  data () {
    return {
      id: this.$route.params.id,
      product: {}, // 地址列表,
      cartcontent: '加入购物车',
      num: localStorage.getItem('userId')
    }
  },
  computed: {
    Cproduct () {
      return this.product
    }
  },
  mounted () {
    this.getAddressList()
    // this.getCartList()
  },
  methods: {
    getAddressList () {
      this.axios.get(`/products/${this.id}`).then((res) => {
        this.product = res
      })
    },
    jumpcart () {
      this.axios.post('/carts', {
        productId: this.id,
        selected: true
      }).then((res = { cartProductList: 0 }) => {
        this.$router.push('/order/cart')
      })
    }
  },
  components: {
    ProductBanner
  }

}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.add-cart
  @include flex()
  justify-content: flex-start
  .like
    margin-left: 20px
    height: 54px
    width: 142px
    background: $colorL
    color: $colorG
    text-align: center
    line-height: 54px
    cursor: pointer
    i::before
      margin-right: 5px
  .cart
    height: 54px
    width: 300px
    background-color: $colorA
    color: $colorG
    text-align: center
    line-height: 54px
    cursor: pointer
</style>

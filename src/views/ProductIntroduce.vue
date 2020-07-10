<!--
 * @Author: your name
 * @Date: 2020-07-06 11:56:32
 * @LastEditTime: 2020-07-10 20:45:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/ProductIntroduce.vue
-->
<template>
  <div class='product-introduce'>
    <product-banner
    :productId="productId"
    :name="Cproduct.name"
    :model=1
    ></product-banner>
    <div class="body">
      <div class="container">
        <product-swiper></product-swiper>
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

          </div>
          <div class="detail">

          </div>
        </div>
      </div>

    </div>
    <div class="price-detail">
      价格说明
    </div>
  </div>
</template>

<script>
import ProductBanner from '../component/ProductBanner'
import ProductSwiper from '../component/ProductSwiper'
export default {
  name: 'ProductIntroduce',
  data () {
    return {
      productId: this.$route.params.id,
      product: {}
    }
  },
  computed: {
    Cproduct () {
      return this.product
    }
  },
  mounted () {
    this.getProductInfo()
  },
  methods: {
    getProductInfo () {
      const id = this.$route.params.id
      this.axios.get(`/products/${id}`).then(res => {
        this.product = res
      })
    }
  },
  components: {
    ProductBanner,
    ProductSwiper
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'
.product-introduce
  .body
    .container
      @include flex()
      align-items: flex-start
  .price-detail
    height: 2000px
</style>

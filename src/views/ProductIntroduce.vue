<!--
 * @Author: your name
 * @Date: 2020-07-06 11:56:32
 * @LastEditTime: 2020-07-13 10:56:41
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
        <product-swiper
        :phone="phone"
        ></product-swiper>
        <div class="infos">
          <div class="title">
            {{ product.name }}
          </div>
          <div class="detailinfo">
            <span v-for="item in loopNum" :key="item.id">{{ product.subtitle }}</span>
          </div>
          <div class="xiaomi">小米自营</div>
          <div class="address">{{ address }}</div>
          <div class="price">{{ product.price }} 元</div>
          <product-chooseSub v-for="item in productAdd" :key="item.id"
          :title="item.title"
          :list="item.contents"
          >
          </product-chooseSub>
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
import productChooseSub from '../component/ProductChooseSub'
export default {
  name: 'ProductIntroduce',
  data () {
    return {
      loopNum: 10,
      productId: this.$route.params.id,
      product: {},
      phone: '',
      address: '辽宁葫芦岛市连山区石油街',
      productAdd: [
        {
          title: '选择版本',
          contents: [
            { version: '4GB+128GB' },
            { version: '6GB+128GB' }
          ]
        },
        {
          title: '选择颜色',
          contents: [
            { version: '天际蓝' },
            { version: '绿陈松' },
            { version: '花花世界' }

          ]
        }
      ]
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
        this.phone = res.mainImage
      })
    }
  },
  components: {
    ProductBanner,
    ProductSwiper,
    productChooseSub
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
      padding-top: 32px
      @include flex()
      align-items: flex-start
      .infos
        flex: 1
  .price-detail
    height: 2000px
</style>

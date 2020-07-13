<!--
 * @Author: your name
 * @Date: 2020-07-06 11:56:32
 * @LastEditTime: 2020-07-13 15:06:10
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
    <div class="container">
      <img :src="phone.substr(0,2) ==='ht' ? phone : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1587873498.07115153.jpg' " v-for="item in loopNum" :key="item.id">
    </div>
  </div>
</template>

<script>
import ProductBanner from '../component/ProductBanner'
export default {
  name: 'ProductIntroduce',
  data () {
    return {
      loopNum: 5,
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
    ProductBanner
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'
.product-introduce
  .container
    @include flexc()
    justify-content: flex-start

    img
      flex-shrink: 0
      height: 100%
      width: 100%

  .price-detail
    height: 2000px

</style>

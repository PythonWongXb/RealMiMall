<!--
 * @Author: your name
 * @Date: 2020-07-06 11:57:18
 * @LastEditTime: 2020-07-13 15:09:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/ProductChoose.vue
-->
<template>
  <div class='product-choose'>
    <product-banner
    :productId="String(Cproduct.id)"
    :name="Cproduct.name"
    :model=0
    ></product-banner>
    <div class="body">
      <div class="container">
        <product-swiper
        :phone="product.mainImage"
        ></product-swiper>
        <div class="infos">
          <div class="title">
            {{ product.name }}
          </div>
          <div class="detailinfo">
            <span v-for="item in loopNum" :key="item.id">{{ product.subtitle }}</span>
          </div>
          <div class="xiaomi">小米自营</div>
          <div class="price">{{ product.price }} 元</div>
          <div class="line"></div>
          <div class="address-box">
            <div class="address">
              {{ address }}
            </div>
          </div>
          <product-chooseSub v-for="item in productAdd" :key="item.id"
          :title="item.title"
          :list="item.contents"
          @update="update"
          >
          </product-chooseSub>
          <div class="sum">
            <div class='choose'>
              <div class="left">{{ Ccontent }}</div>
              <div class="right">{{ product.price }}元</div>
            </div>
            <div class="summoney">总计：{{ product.price }}元 </div>
          </div>
        </div>
      </div>
        <div class="info">
          <div class="container">
          <div class="add-cart">
            <div class="cart" @click="jumpcart">
              {{num ? cartcontent: '登录并加入购物车' }}
            </div>
            <div class="like">
              <i class='icon-31guanzhu1xuanzhong'>喜欢</i>
            </div>
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
import productChooseSub from '../component/ProductChooseSub'
import ProductSwiper from '../component/ProductSwiper'

export default {
  name: 'ProductChoose',
  data () {
    return {
      content: '',
      loopNum: 10,
      productId: this.$route.params.id,
      product: {},
      phone: '',
      address: '辽宁 葫芦岛市 连山区 石油街',
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
            { version: '白色' },
            { version: '花色' },
            { version: '鸡粑粑色' }

          ]
        }
      ],
      num: localStorage.getItem('userId'),
      cartcontent: '加入购物车'
    }
  },
  computed: {
    Cproduct () {
      return this.product
    },
    Ccontent () {
      return this.content
    }
  },
  mounted () {
    this.getAddressList()
    // this.getCartList()
    this.update()
  },
  methods: {
    getAddressList () {
      this.axios.get(`/products/${this.productId}`).then((res) => {
        this.product = res
      })
    },
    jumpcart () {
      this.axios.post('/carts', {
        productId: this.productId,
        selected: true
      }).then((res = { cartProductList: 0 }) => {
        this.$router.push('/order/cart')
      })
    },
    update () {
      // 设置延时，否则无法渲染
      setTimeout(() => {
        this.content = ''
        const s = document.querySelectorAll('.current')
        s.forEach((item) => {
          this.content += item.innerHTML
        })
      }, 20)
    }
  },
  components: {
    ProductBanner,
    productChooseSub,
    ProductSwiper
  }

}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'
.product-choose
  .body
    padding-bottom: 30px
    .container
      padding-top: 32px
      @include flex()
      align-items: flex-start
      .infos
        flex: 1
        padding-left: 30px
        font-size: 14px
        .title
          font-size: 24px
          font-weight: 400
          color: #212121
        .detailinfo
          color: #b0b0b0
          margin: 0
          padding: 0
          padding-top: 8px
          line-height: 1.5
        .xiaomi
          color: $colorA
          margin-top: 14px
        .address-box
          margin: 20px 0
          .address
            padding: 30px 50px
            position: relative
            background: #fafafa
            border: 1px solid #e0e0e0
        .price
          font-size: 18px
          line-height: 1
          color: #ff6700
          padding: 12px 0 10px
        .line
          margin-top: 12px
          border-bottom: 1px solid #e0e0e0
        .sum
          padding: 30px
          background: #f9f9fa
          .choose
            line-height: 30px
            font-size: 14px
            @include flex()
          .summoney
            font-size: 24px
            line-height: 32px
            padding-top: 20px
            color: $colorA
    .info
      .container
        display: flex
        justify-content: flex-end

        .add-cart
          @include flex()
          justify-content: flex-start
          width: 536px
        .like
          margin-left: 20px
          height: 54px
          width: 142px
          background: $colorL
          color: $colorG
          text-align: center
          line-height: 54px
          cursor: pointer
          margin-right: 30px
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

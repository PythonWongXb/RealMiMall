<!--
 * @Author: your name
 * @Date: 2020-06-24 16:16:00
 * @LastEditTime: 2020-07-10 22:59:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cart/src/components/cartMain.vue
-->
<template>
  <div class="cartmain">
    <div class="container">
      <div class="body">
        <div class="list">
          <div class="hd">
            <div class="c1">商品信息</div>
            <div class="c2">商品金额</div>
            <div class="c3">商品数量</div>
            <div class="c4">总金额</div>
            <div class="c5">编辑</div>
          </div>
          <div class="by">
            <div class="each" v-for="info in cInfos.cartProductVoList" :key="info.id">
              <div class="c1">
                <div @click="updateCart(info, '')" :class="['icon', info.productSelected ? 'active1': '']" />
                <img :src="info.productMainImage" />
                <div class>{{info.productName}}</div>
              </div>
              <div class="c2">{{info.productPrice}}</div>
              <div class="c3">
                <div @click="updateCart(info,'-')" class="reduce">-</div>
                <div class="num">{{info.quantity}}</div>
                <div @click="updateCart(info,'+')" class="add">+</div>
              </div>
              <div class="c4">{{info.productTotalPrice }}</div>
              <div @click="record(info)" class="c5 iconfont icon-la-ji-tong"></div>

            </div>
          </div>
          <div class="ft">
            <div class="lf">
              <div  @click="toggleAll" :class="['all_choose', cInfos.selectedAll ? 'active': '']" />
              <div class="all">全选</div>
            </div>
            <div class="rg">
              <div class="p1">总价：</div>
              <div class="p2">{{cInfos.cartTotalPrice}} 元</div>
              <div @click="order" class="p3" :class="[ !isEmpty ? 'jump' : 'empty']">结 算</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sum">共{{ cInfos.cartProductVoList.length }}件商品，已选择{{ chooseNum }}件商品</div>
    </div>
    <modal
    :title="'标题'"
    :sureText="'sure'"
    :showModal="showModal"
    :cancelText="'cancel'"
    :btnType="'3'"
    @submit="delProduct"
    @cancel="showModal = false"
    >
    <template v-slot:body>
      <h1>要删除{{proName}}吗？</h1>
    </template>
    </modal>
  </div>
</template>

<script>
import modal from '../component/Modal'

export default {
  computed: {
    cInfos () {
      return this.infos
    },
    isEmpty () {
      return this.cInfos.cartProductVoList.every(item => !item.productSelected)
    },
    chooseNum () {
      return this.cInfos.cartProductVoList.filter(item => item.productSelected).length
    }
  },
  filters: {
    currency (v) {
      return '¥' + v.toFixed(2)
    }
  },
  data () {
    return {
      money: '0.00',
      showModal: false,
      proId: null,
      infos: { cartProductVoList: [] },
      proName: null
    }
  },
  mounted () {
    this.getCartList()
  },
  methods: {
    // 获取购物车列表
    getCartList () {
      this.axios.get('/carts').then((res) => {
        // console.log(res)
        this.infos = res
      })
    },
    // 更新购物车数量和购物车单选状态
    updateCart (item, type) {
      let quantity = item.quantity
      let selected = item.productSelected
      if (type === '-') {
        if (quantity === 1) {
          // this.$message.info('least one')
          this.$message.warning('商品至少保留一件')
          return
        }
        --quantity
      } else if (type === '+') {
        if (quantity > item.productStock) {
          this.$message.warning('购买数量不能超过库存数量')
          return
        }
        ++quantity
      } else {
        selected = !item.productSelected
      }
      this.axios.put(`/carts/${item.productId}`, {
        quantity,
        selected
      }).then((res) => {
        this.infos = res
      })
    },
    // 删除购物车商品
    delProduct () {
      this.axios.delete(`/carts/${this.proId}`).then((res) => {
        this.$message.success('删除成功')
        this.infos = res
        this.showModal = false
      })
    },
    // 控制全选功能
    toggleAll () {
      const url = this.cInfos.selectedAll ? '/carts/unSelectAll' : '/carts/selectAll'
      this.axios.put(url).then((res) => {
        this.infos = res
      })
    },
    // 购物车下单
    order () {
      console.log(this.isEmpty)
      if (this.isEmpty) {
        this.$message.warning('请选择一件商品')
      } else {
        location.href = '/order/confirm'
      }
    },

    record (item) {
      this.showModal = true
      this.proId = item.productId
      this.proName = item.productName
      console.log(this.proId)
    }

  },
  components: {
    modal
  }
}
</script>

<style lang='sass' scoped>
@import './../assets/sass/base'
.cartmain
  width: 100%
  div
    text-align: center

  .container
    .body
      .list
        .hd
          display: flex
          justify-content: space-between
          align-items: center
          height: 40px
          background-color: #545454
          color: #fff

          .c1
            flex: 4.5

          .c2
            flex: 1.5

          .c3
            flex: 1.5

          .c4
            flex: 1.5

          .c5
            flex: 1

        .by
          display: flex
          flex-direction: column
          align-items: center

          .each
            width: 100%
            display: flex
            justify-content: space-between
            align-items: center
            background-color: #fff
            color: #333
            height: 100px
            border: 1px #f2f2f2 solid

            &:not(:last-child)
              border-top: none

            .c1
              flex: 4.5
              display: flex
              align-items: center
              .active1
                  background-color: pink

              .icon
                margin-left: 20px
                height: 20px
                width: 20px
                border: 1px red solid
                border-radius: 50%
                cursor: pointer

              img
                height: 50px
                width: 50px
                margin-left: 20px
                margin-right: 20px

            .c2
              flex: 1.5

            .c3
              display: flex
              align-items: center
              justify-content: center
              flex: 1.5
              .reduce
                height: 30px
                width: 40px
                background-color: #ccc
                line-height: 30px
                cursor: pointer
                &:hover
                  color: #fff

              .add
                height: 30px
                width: 40px
                background-color: #ccc
                line-height: 30px
                cursor: pointer
                &:hover
                  color: #fff

              .num
                height: 30px
                width: 30px
                line-height: 30px
                border-top: 1px #ccc solid
                border-bottom: 1px #ccc solid

            .c4
              flex: 1.5

            .c5
              flex: 1
              font-size: 20px

              &:hover
                color: red
                cursor: pointer

        .ft
          margin-top: 30px
          padding-left: 20px
          display: flex
          width: 100%
          justify-content: space-between
          align-items: center
          height: 60px
          border: 1px #f2f2f2 solid
          margin-bottom: 50px
          .lf
            display: flex
            align-items: center

            .all_choose
              height: 20px
              width: 20px
              border: 1px #333 solid
              border-radius: 50%
              cursor: pointer

            .active
              background-color: red

            .all
              margin-left: 20px

          .rg
            display: flex
            align-items: center
            height: 100%
            .jump
              background-color: red

            .empty
              background-color: #333

            .p2
              margin-left: 5px
              color: #af3145
              font-size: 18px
              font-weight: 700

            .p3
              height: 100%
              width: 100px
              line-height: 60px
              color: #fff
              margin-left: 20px
              cursor: pointer
              &:hover
                color: #af3145

</style>

<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage" />
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.totalPrice + 'X' + item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <el-pagination
            v-if="true"
            class="pagination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
          ></el-pagination>
          <div class="load-more" v-if="true">
            <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
          </div>
          <div
            class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="0"
          >
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" v-show="loading" />
          </div>
          <no-data v-if="!loading && list.length==0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from './../component/Loading'
import NoData from './../component/NoData'
import { Pagination, Button } from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'
export default {
  name: 'order-list',
  components: {
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button
  },
  directives: {
    infiniteScroll
  },
  data () {
    return {
      loading: false,
      list: [],
      pageSize: 2,
      pageNum: 1,
      total: 0,
      showNextPage: true, // 加载更多：是否显示按钮
      busy: false // 滚动加载，是否触发
    }
  },
  mounted () {
    this.getOrderList(1)
  },
  methods: {
    getOrderList (type) {
      this.loading = true
      this.busy = true
      this.axios
        .get('/orders', {
          params: {
            pageSize: 2,
            pageNum: this.pageNum
          }
        })
        .then(res => {
          this.loading = false
          if (type === 1) {
            this.list = res.list
          } else {
            this.list = this.list.concat(res.list)
          }
          this.total = res.total
          this.showNextPage = res.hasNextPage
          if (res.hasNextPage) {
            this.busy = false
          } else {
            this.busy = true
          }
        })
        .catch(() => {
          this.loading = false
        })
    },
    goPay (orderNo) {
      // 三种路由跳转方式
      // this.$router.push('/order/pay')
      /* this.$router.push({
          name:'order-pay',
          query:{
            orderNo
          }
        }) */
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      })
    },
    // 第一种方法：分页器
    handleChange (pageNum) {
      this.pageNum = pageNum
      this.getOrderList(1)
    },
    // 第二种方法：加载更多按钮
    loadMore () {
      this.pageNum++
      this.getOrderList(0)
    },
    // 第三种方法：滚动加载，通过npm插件实现
    scrollMore () {
      this.busy = true
      setTimeout(() => {
        this.pageNum++
        this.getOrderList(0)
      }, 500)
    },
    // 专门给scrollMore使用
    getList () {
      this.loading = true
      this.axios
        .get('/orders', {
          params: {
            pageSize: 2,
            pageNum: this.pageNum
          }
        })
        .then(res => {
          this.list = this.list.concat(res.list)
          this.loading = false
          if (res.hasNextPage) {
            this.busy = false
          } else {
            this.busy = true
          }
        })
    }
  }
}
</script>
<style lang="sass">
@import './../assets/sass/config'
@import './../assets/sass/mixin'

.order-list
  .wrapper
    padding-top: 33px
    padding-bottom: 110px
    background-color: $colorJ

    .order-box
      .order
        margin-bottom: 100px
        border: 1px red solid
        background-color: $colorG

        &:last-child
          margin-bottom: 0

        .order-title
          height: 74px
          padding: 0 43px
          font-size: 16px
          background-color: $colorK
          color: $colorC

          .item-info
            span
              margin: 0 9px

          .money
            font-size: 26px
            color: $colorB

        .order-content
          padding: 0 43px

          .good-box
            width: 88%

            .good-list
              display: flex
              align-items: center
              height: 145px

              .good-img
                width: 112px

                img
                  width: 100%

              .good-name
                font-size: 20px
                color: $colorB

          .good-state
            height: 145px
            font-size: 20px
            color: $colorA

            a
              color: $colorA

      .pagination
        text-align: right

      .el-pagination.is-background .el-pager li:not(.disabled).active
        background-color: #ff6600

      .el-button--primary
        background-color: #ff6600
        border-color: #ff6600

      .load-more,
      .scroll-more
        text-align: center

</style>

<!--
 * @Author: your name
 * @Date: 2020-07-07 20:08:59
 * @LastEditTime: 2020-07-13 20:30:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/FlashBuy.vue
-->
<template>
  <div class='flash'>
    <div class="container">
      <div class="head-index-title">
        小米闪购
      </div>
      <div class="body">
        <div class="time">
          <div class="everytime iconfont">{{ hours }}:{{ minutes }}场</div>
          <div class="title-product">距离结束还有</div>
          <div class="last-time">
            <div class="h">{{ hours }}</div>
            <span>:</span>
            <div class="min">{{ minutes }}</div>
            <span>:</span>
            <div class='sec'>{{ seconds }}</div>
          </div>
        </div>
        <div class="swiper-box">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
              <div class='each-box'>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583380246.67713502.jpg?thumb=1&w=200&h=200" />
                <div class="title-product">悦米YM人体工学椅 黑色</div>
                <div class="info-product">健康坐姿，舒适体验</div>
                <div class="price-product"><span>1099元</span><del>1399元</del></div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
            <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'flash',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const date = new Date()
      // 设置时间3小时后
      date.setHours(date.getHours() + 3)
      // 获取这个时间的毫秒数，未来的时间戳，这个时间到1970.1.1的毫秒数
      const targetTime = date.getTime()
      // 每16毫秒执行下面的函数
      const ids = setInterval(() => {
        // 每间隔16毫秒执行这个函数
        // 重新获取当前的时间
        var date = new Date()
        // 重新获取当前时间戳 现在到1970.1.1的毫秒数
        let time = date.getTime()
        // console.log(targetTime-time);//10795679 毫秒
        // 用未来到1970.1.1的毫秒数-现在到1970.1.1的毫秒数，这个就是现在到未来的时间差毫秒数
        // 这是毫秒变成秒数，就要/1000，做四舍五入，进到秒
        time = Math.round((targetTime - time) / 1000)
        // 10796 秒  1小时3600秒
        // 1小时是3600秒  除3600向下取整就是小时数
        var hours = Math.floor(time / 3600)
        //     1小时3600毫秒，除3600取余数，就是除了小时之外的所有秒数，除60是分钟
        var minutes = Math.floor((time % 3600) / 60)
        // 用当前秒-小时所用的秒-分所用的秒，就是剩余的秒数
        var seconds = time - hours * 3600 - minutes * 60
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
        if (seconds < 10) {
          seconds = '0' + seconds
        }
        if (hours + minutes + seconds === 0) {
          clearInterval(ids)
        }
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
        // console.log(this.hours, this.minutes, this.seconds)
      }, 1000)
    }
  },
  data () {
    return {
      hours: '00',
      minutes: '00',
      seconds: '00',
      swiperOptions: {
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 3000 // 1秒切换一次
        }
      }
    }
  },
  computed: {
    h () {
      return this.hours
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>

<style lang="sass" scoped>
@import url('//at.alicdn.com/t/font_1894585_rhjmxe1k60j.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.flash
  background: $colorN

  .container
    @include flexc()
    align-items: flex-start

    .body
      @include flex()
      height: 300px
      width: 100%

      .time
        @include flexc()
        justify-content: flex-start
        flex-shrink: 0
        height: 300px
        width: 234px
        padding-top: 39px
        text-align: center
        border-top-style: solid
        border-top-width: 1px
        background: #f1eded

        .everytime
          @include flexc()
          line-height: 21px
          font-size: 21px
          color: #ef3a3b

          &:after
            content: '\e608'
            @include flex()
            height: 100px
            width: 81px
            font-size: 60px

        .title
          line-height: 15px
          font-size: 15px
          color: rgba(0,0,0,.54)

        .last-time
          @include flex()
          width: 168px
          margin-top: 28px

          div
            width: 46px
            height: 46px
            line-height: 46px
            font-size: 24px
            background: #605751
            color: #fff

          span
            height: 46px
            width: 15px
            font-size: 28px
            font-style: normal
            line-height: 46px
            color: #605751

      .swiper-box
        position: relative
        height: 100%
        width: 892px

        .swiper-container
          position: relative
          height: 100%

          .swiper-wrapper
            position: static

            .swiper-slide
              position: relative
              display: flex
              height: 100%
              width: 100%
              padding-left: 14px

              .each-box
                @include flexc()
                flex: 1
                flex-shrink: 0
                background: $colorG
                height: 100%
                margin-right: 15px
                padding-top: 40px
                padding-bottom: 20px
                border-top-color: #ffac13
                border-top-width: 1px
                border-top-style: solid

                &:last-child
                  margin-right: 0

                img
                  height: 166px
                  width: 160px

        .swiper-button-prev
          position: absolute
          top: -30px
          right: 36px
          left: auto
          height: 24px
          width: 36px
          --swiper-theme-color: #ff6600
          --swiper-navigation-color: $colorL
          --swiper-navigation-size: 10px
          background-color: $colorN
          border: 1px solid $colorL
          outline: none
          &:hover
            color: $colorA

        .swiper-button-next
          position: absolute
          top: -30px
          right: 0
          left: auto
          border: none
          height: 24px
          width: 36px
          border: 1px solid $colorL
          border-left: none
          background-color: $colorN
          --swiper-theme-color: #ff6600
          --swiper-navigation-color: $coloA
          --swiper-navigation-size: 10px
          outline: none
          &:hover
            color: $colorA
  </style>

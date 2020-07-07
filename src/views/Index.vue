<!--
 * @Author: your name
 * @Date: 2020-07-06 11:53:27
 * @LastEditTime: 2020-07-07 23:26:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/index.vue
-->
<template>
  <div class='index'>
    <div class="swiper">
      <div class="container">
        <div class="swiper">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in swiperData" :key="item.page"><a href=""><img :src="item.img" alt=""></a></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
        <div class="submenu">
          <div class="each-box">
            <div class="title iconfont">手机/电话卡</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">电视/盒子</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList1" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">手机/电话卡</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">电视/盒子</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList1" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">手机/电话卡</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">电视/盒子</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList1" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">手机/电话卡</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">电视/盒子</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList1" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">手机/电话卡</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">电视/盒子</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList1" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">手机/电话卡</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="each-box">
            <div class="title iconfont">电视/盒子</div>
            <div class="sub">
              <div class='subOne' v-for="i in menuList1" :key="i.id">
                <div class='subTwo' v-for="j in i" :key="j.id">
                  <a href=""><img :src="j ? j.img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90'" alt=""></a>
                  <div>{{j? j.name: '无名'}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Banner></Banner>
    <flash-buy></flash-buy>
    <div class="phone">
      <div class="container">
        手机
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Banner from '../component/Banner'
import FlashBuy from '../component/FlashBuy'
import 'swiper/css/swiper.css'

export default {
  name: 'carrousel',
  data () {
    return {
      swiperOptions: {
        loop: true,
        effect: 'fade',
        autoplay: {
          disableOnInteraction: false,
          delay: 1000 // 1秒切换一次
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperData: [
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1eafff325f0e96d5c58929487f82f21d.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          page: 42
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5ce10d98e0beecf3c5a331a52b71621.jpg?w=2452&h=920',
          page: 43
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12a95d14eec558d7ebd585b1b3b725b0.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          page: 44
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a44503bf30775c743866551c813d4569.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          page: 45
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/956e0b7aa4cf7679e795b8db74d2b14a.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          page: 46
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '小米CC9'
          },
          {
            id: 31,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '小米8青春版'
          },
          {
            id: 32,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          },
          {
            id: 34,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          },
          {
            id: 35,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      menuList1: [
        [
          {
            id: 30,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '小米CC9'
          },
          {
            id: 31,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '小米8青春版'
          },
          {
            id: 32,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          },
          {
            id: 34,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          },
          {
            id: 35,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Banner,
    FlashBuy
  },
  directives: {
    swiper: directive
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.index
  .swiper
    height: 460px
    .container
      position: relative
      height: 460px
      .swiper
        .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
          width: auto
          position: absolute
          right: 30px
          left: auto
        .swiper-container
          width: 100%
          height: 100%
        .swiper-button-next
          height: 69px
          width: 41px
          line-height: 69px
          text-align: center
          top: calc(50% - 35px)
          right: 0
          z-index: 2
          outline: none
          --swiper-navigation-size: 20px
          --swiper-navigation-color: #ccc
          border-radius: 5px 0 0 5px
          &:hover
            background: rgba(0,0,0,.4)

        .swiper-button-prev
          height: 69px
          width: 41px
          line-height: 69px
          text-align: center
          top: calc(50% - 35px)
          left: 234px
          z-index: 2
          outline: none
          --swiper-navigation-size: 20px
          --swiper-navigation-color: #ccc
          border-radius: 0 5px 5px 0

          &:hover
            background: rgba(0,0,0,.4)
      .submenu
        position: absolute
        top: 0
        left: 0
        height: 100%
        width: 234px
        background: rgba(105,101,101,.6)
        z-index: 2
        @include flexc()
        padding: 20px 0
        .each-box
          height: 100%
          width: 100%
          &:hover
            background: $colorA
          &:hover
            .sub
              display: flex
          .title
            display: flex
            padding-left: 30px
            color: $colorG
            width: calc(100% - 20px)
            line-height: 35px
            position: relative
            &::after
              content: '\e65c'
              position: absolute
              right: 0

          .sub
            position: absolute
            left: 234px
            top: 0
            height: 460px
            background-color: $colorG
            z-index: 2
            display: none
            @include shadow()
            .subOne
              height: 460px
              .subTwo
                height: calc(76.66px)
                width: 223px
                @include flex()
                justify-content: flex-start
                padding-left: 20px
                color: $colorB
                font-size: 14px
                cursor: pointer
                &:hover
                  color: $colorA

                img
                  height: 40px
                  width: 40px
                  margin-right: 12px

</style>

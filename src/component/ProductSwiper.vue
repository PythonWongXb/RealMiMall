<!--
 * @Author: your name
 * @Date: 2020-07-10 23:18:27
 * @LastEditTime: 2020-07-13 15:12:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/ProductSwiper.vue
-->
<template>
<div class='swiper-box'>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in num" :key="item.id">
      <img :src="phone" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-loop',
  props: {
    phone: String
  },
  title: 'Loop mode / Infinite loop',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      num: 4,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: 'slide',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style lang='sass'>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.swiper-box
  width: 560px

  .swiper-container
    img
      height: auto
      width: 100%

    .swiper-pagination-bullet
      height: 3px
      width: 50px
      border: 0
      border-radius: 0
      background: #ccc

      &:hover
        opacity: 1

    .swiper-wrapper
      height: 100%
      width: 100%

    .swiper-button-next
      border-radius: 3px 0 0 3px

    .swiper-button-prev
      border-radius: 0 3px 3px 0

    .swiper-button-next,
    .swiper-button-prev
      height: 69px
      width: 41px

      &:hover
        background: rgba(0,0,0,.5)

    .swiper-button-next::after,
    .swiper-button-prev::after
      display: block
      line-height: 69px
      text-align: center
      font-size: 30px
      color: #ccc

    .swiper-slide
      @include flex()
      justify-content: center
      height: 560px
      width: 100%
      margin-right: 0

</style>

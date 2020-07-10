<template>
<div class='swiper-box'>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2140013030,314739014&fm=26&gp=0.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2140013030,314739014&fm=26&gp=0.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2140013030,314739014&fm=26&gp=0.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2140013030,314739014&fm=26&gp=0.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2140013030,314739014&fm=26&gp=0.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2140013030,314739014&fm=26&gp=0.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2140013030,314739014&fm=26&gp=0.jpg" alt=""></swiper-slide>
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
  title: 'Loop mode / Infinite loop',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
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
    // width: 560px
    img
      height: 100%
      width: 100%
    .swiper-pagination-bullet
      height: 30px
      width: 30px
      background-color: red
      .my-bullet
        display: block
        height: 20px
        width: 20px
        color: red
    .swiper-wrapper
      height: 100%
      width: 100%
    .swiper-button-prev::after
      color: red
      font-size: 12px
    .swiper-slide
      height: 100%
      width: 100%
      margin-right: 0
</style>

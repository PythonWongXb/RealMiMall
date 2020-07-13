<!--
 * @Author: your name
 * @Date: 2020-07-08 20:12:02
 * @LastEditTime: 2020-07-13 20:32:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/HomeAppliance.vue
-->
<template>
  <div class="homeappliance">
    <div class="container">
      <div class="header">
        <div class="head-index-title">家电</div>
        <div class="right-part">
          <div class="hot" :class="{'current': !reverse}" @mouseenter="emitHotMovie">热门</div>
          <div class="tv"  :class="{'current': reverse}" @mouseenter="emitHot" >热门影音</div>
        </div>
      </div>
      <div class="body">
        <div class="left-part">
          <div v-for="item in adv" :key="item.id">
            <img :src="item.img" />
          </div>
        </div>
        <div class="right-part">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeappliance',
  data () {
    return {
      adv: [
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f256b81e4233333692eece77ed06ebc2.jpg?thumb=1&w=234&h=300&f=webp&q=90' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e22cf675726deb5eb728f2ccd4cbeafd.jpg?thumb=1&w=234&h=300&f=webp&q=90' }
      ]
    }
  },
  methods: {
    emitHot () {
      this.$emit('hot')
    },
    emitHotMovie () {
      this.$emit('hotmovie')
    }
  },
  props: {
    reverse: Boolean
  }

}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.homeappliance
  background: $colorN

  .container
    .body
      @include flex()
      height: 614px

      .left-part
        @include flexc()
        height: 100%

        div
          height: 300px
          cursor: pointer
          transition: all .5s

          &:hover
            transform: translateY(-5px)

      .right-part
        display: flex
        flex-wrap: wrap
        flex: 1
        height: 100%
        padding-left: 14px

    .header
      @include flex()

      .right-part
        @include flex()

        div
          margin-left: 20px
          font-weight: 200
          border-bottom: 2px solid #f5f5f5
          color: #424242
          transition: border .3s
          cursor: pointer

          &.current
            border-bottom: 2px solid $colorA
            color: $colorA
</style>

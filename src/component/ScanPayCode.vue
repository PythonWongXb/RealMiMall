<!--
 * @Author: your name
 * @Date: 2020-07-05 13:47:03
 * @LastEditTime: 2020-07-13 09:34:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/ScanPayCode.vue
-->
<template>
  <div class="scan">
    <div class="mask"></div>
    <div class="item-wrap">
      <div class="img-scan"></div>
      <div class="img-pay">
        <div class="title">
          微信支付
          <em @click="close"></em>
        </div>
        <div class="qrcode">
          <img :src="img" />
        </div>
        <div class="tip">
          <p>
            请使用
            <span class="theme-color">微信</span>扫一扫
          </p>
          <p>二维码完成支付</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'scan-pay-code',
  props: {
    img: String
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="sass">
@import './../assets/sass/config'
@import './../assets/sass/mixin'

.scan
  position: absolute
  top: 0
  width: 100%
  height: 100%

  .mask
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    opacity: .6
    background-color: #000000

  .item-wrap
    position: fixed
    top: 50%
    left: 50%
    display: flex
    align-items: center
    width: 670px
    transform: translate(-50%, -50%)

    .img-scan
      @include bgImg(296px, 485px, 'http://img3.imgtn.bdimg.com/it/u=2997124204,4140529389&fm=26&gp=0.jpg')

    .img-pay
      display: inline-block
      height: 440px
      width: 370px
      background-color: #ffffff

      .title
        position: relative
        height: 60px
        padding: 0 18px
        line-height: 60px
        font-size: 20px
        background-color: #f5f5f5
        color: #333333

        em
          @include bgImg(13px, 13px, 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593939047035&di=9005be8fdc761b59f852b6695a603049&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F30%2F57%2F99573b1a6f730da.jpg')
          position: absolute
          top: 23.5px
          right: 20px
          cursor: pointer

      .qrcode
        padding: 44px 0 26px
        text-align: center

        img
          height: 240px
          width: 237px

      .tip
        text-align: center
        font-size: 14px
        color: #333333

</style>

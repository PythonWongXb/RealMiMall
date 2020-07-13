<!--
 * @Author: your name
 * @Date: 2020-07-13 10:24:03
 * @LastEditTime: 2020-07-13 20:47:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/ProductChoose.vue
-->
<template>
  <div class='product-choose'>
    <div class="title">{{ title }}</div>
    <div class="details">
      <div v-for="(item, index) in list" :key="item.id" class='choice' :class="{'current': index === choose}" @click="update(index)">
        {{ item.version }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-choose',
  data () {
    return {
      choose: 0
    }
  },
  props: {
    list: Array,
    title: String
  },
  methods: {
    update (index) {
      this.choose = index
      this.$emit('update')
    }
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.product-choose
  margin-bottom: 30px

  .title
    margin-bottom: 10px
    line-height: 27px
    font-size: 18px
    color: #333

  .details
    display: flex
    flex-wrap: wrap

    .choice
      height: 42px
      width: calc( 50% - 5px)
      margin-right: 10px
      line-height: 42px
      text-align: center
      border: 1px #ccc solid
      cursor: pointer

      &.current
        border-color: $colorA

      &:nth-child(2n)
        margin-right: 0

      &:nth-child(n + 3)
        margin-top: 10px

      &:hover
        border-color: $colorA

</style>

<!--
 * @Author: your name
 * @Date: 2020-07-06 15:28:32
 * @LastEditTime: 2020-07-06 23:18:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/Header.vue
-->
<template>
  <div class='commonHeader'>
    <div class="container">
      <div class="header-box">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-body">
        </div>
        <div class="header-search">
          <input type="search" @click.stop="getColor" v-model="value" :class="{'select-input': selectInput}" ref="holder"/>
          <i class='icon-sou_suo' :class="{'select-icon': selectIcon}"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonHeader',
  mounted () {
    this.init()
  },
  computed: {
    placeholder () {
      return this.value
    }
  },
  methods: {
    init () {
      console.log(document.addEventListener('click', () => {
        this.selectIcon = false
        this.selectInput = false
      }))
      this.$refs.holder.placeholder = this.searchData[Math.floor((Math.random() * this.searchData.length) + 1)]
      var i = 0
      setInterval(() => {
        const s = this.searchData[i]
        if (s) {
          this.$refs.holder.placeholder = s
          i++
        } else {
          i = 0
        }
      }, 4000)
    },
    getColor () {
      this.selectInput = true
      this.selectIcon = true
    }
  },
  data () {
    return {
      selectInput: false,
      selectIcon: false,
      value: '',
      searchData: [
        '小米10', '小米手环5', 'Redmi', '小米100', '小爱同学'
      ]

    }
  }
}
</script>

<style lang='sass' scoped>
@import '../assets/sass/base'
@import '../assets/sass/mixin'

.commonHeader
  .container
    .header-box
      height: 100px
      @include flex()
      .header-logo
      .header-body
        height: 100%
        flex: 1
      .header-search
        width:296px
        height: 100%
        @include flex()
        input
          width:245px
          outline: none
          border: 1px solid $colorO
          height: 50px
          text-indent: 10px
          &.select-input
            border: 1px red solid

        i
          color: $colorP
          height: 50px
          width: 52px
          text-align: center
          line-height: 50px
          border: 1px $colorO solid
          border-left: none
          cursor: pointer
          &.select-icon
            border: 1px $colorA solid
            border-left: none
          &:hover
            background-color: $colorA
            color: $colorG
            border: 1px $colorA solid
</style>

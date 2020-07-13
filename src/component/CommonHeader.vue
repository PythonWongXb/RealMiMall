<!--
 * @Author: your name
 * @Date: 2020-07-06 15:28:32
 * @LastEditTime: 2020-07-13 19:57:35
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
          <div class="body-box">
            <div class="slot"></div>
            <div class="info-box">
                小米手机
            </div>
            <div class="info-box">Redmi红米</div>
            <div class="info-box">电视</div>
            <div class="info-box">笔记本</div>
            <div class="info-box">家电</div>
            <div class="info-box">路由器</div>
            <div class="info-box">智能硬件</div>
            <div class="info-box">服务</div>
            <div class="info-box">社区</div>
            <div class="subtitle">
                <div class="container">
                  <div v-for="item in phones" :key="item.id" class='eachSubmenu'>
                    <img :src="item.src" />
                    <div>{{ item.title }}</div>
                    <div >{{ item.money }}</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="header-search">
          <input type="search" @click.stop="getColor" v-model="value" :class="{'select-input': selectInput}" ref="holder"/>
          <i class='icon-sou_suo' :class="{'select-icon': selectIcon}"></i>
          <div class="subsearch" :class="{'select-sub': selectSub}" v-if="selectSub">
            <div class="sub-box">
              <div >品牌1</div>
              <div >品牌2</div>
              <div >品牌3</div>
              <div >品牌4</div>
              <div >品牌5</div>
              <div >品牌6</div>
              <div >品牌7</div>
              <div >品牌8</div>
            </div>
          </div>
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
        this.selectSub = false
      }))
      this.$refs.holder.placeholder = this.searchData[Math.floor((Math.random() * this.searchData.length) + 1)]
      var i = 0
      this.timer = setInterval(() => {
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
      this.selectSub = true
      clearInterval(this.timer)
    }
  },
  data () {
    return {
      selectInput: false,
      selectIcon: false,
      selectSub: false,
      timer: null,
      value: '',
      searchData: [
        '小米10', '小米手环5', 'Redmi', '小米100', '小爱同学'
      ],
      phones: [
        { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90', title: '卖手机啊', money: '998' },
        { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90', title: '卖手机啊', money: '998' },
        { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90', title: '卖手机啊', money: '998' },
        { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90', title: '卖手机啊', money: '998' },
        { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90', title: '卖手机啊', money: '998' },
        { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90', title: '卖手机啊', money: '998' }
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
      @include flex()
      height: 100px

      .header-body
        display: flex
        align-items: center
        flex: 1
        height: 100%
        margin-left: 70px

        .body-box
          position: relative
          display: flex
          align-items: center
          height: 100%
          width:700px
          .subtitle
            position: fixed
            top: 140px
            left: 0
            height: 0
            @include flex()
            z-index: 11
            overflow: hidden
            background: $colorG
            width: 100%
            transition-property: height opacity
            transition-duration: .5s
            @include shadow()

            .container
              @include flex()

              .eachSubmenu
                @include flexc()

          .info-box
            padding: 0 5px
            color: $colorB
            cursor: pointer
            &:hover
              color: $colorA
            &:hover ~ .subtitle
              height: 200px
              border-top: 1px $colorO solid

          .slot
            width: 120px
            height: 100%

      .header-search
        position: relative
        @include flex()
        z-index: 2
        width:296px
        height: 100%

        .subsearch
          position: absolute
          top: calc(100% - 25px)
          height:241px
          width: 244px
          border-top: none
          border: 1px $colorO solid

          .sub-box
            @include flexc()
            height: 100%
            background-color: $colorG

            div
              flex: 1
              width: 100%
              line-height: 30px
              padding-left: 10px
              font-size: 12px
              color: $colorM
              cursor: pointer
              &:hover
                background: $colorO

          &.select-sub
            border: 1px $colorA solid
            border-top: none

        input
          width:244px
          height: 50px
          text-indent: 10px
          border: 1px solid $colorO
          outline: none

          &.select-input
            border: 1px red solid

        i
          height: 50px
          width: 52px
          text-align: center
          line-height: 50px
          color: $colorP
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

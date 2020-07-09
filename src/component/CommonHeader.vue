<!--
 * @Author: your name
 * @Date: 2020-07-06 15:28:32
 * @LastEditTime: 2020-07-09 15:15:49
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
                    <div class="">{{ item.money }}</div>
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
              <div class="">品牌1</div>
              <div class="">品牌2</div>
              <div class="">品牌3</div>
              <div class="">品牌4</div>
              <div class="">品牌5</div>
              <div class="">品牌6</div>
              <div class="">品牌7</div>
              <div class="">品牌8</div>
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
  // border-bottom: 1px $colorO solid
  .container
    .header-box
      height: 100px
      @include flex()
      .header-logo
      .header-body
        height: 100%
        flex: 1
        display: flex
        align-items: center
        margin-left: 70px
        .body-box
          position: relative
          width:700px
          height: 100%
          display: flex
          align-items: center
          .subtitle
            position: fixed
            overflow: hidden
            transition: all .5s
            background: $colorG
            height: 0px
            width: 100%
            left: 0
            top: 140px
            z-index: 11
            @include shadow()
            @include flex()
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
        width:296px
        height: 100%
        @include flex()
        position: relative
        z-index: 2
        .subsearch
          position: absolute
          height:241px
          width: 244px
          border: 1px $colorO solid
          border-top: none
          top: calc(100% - 25px)

          .sub-box
            @include flexc()
            height: 100%
            background-color: $colorG

            div
              width: 100%
              flex: 1
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

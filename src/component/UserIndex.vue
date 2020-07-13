<!--
 * @Author: your name
 * @Date: 2020-07-06 15:38:38
 * @LastEditTime: 2020-07-13 20:57:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/component/UserIndex.vue
-->
<template>
  <div class='userindex'>
    <div class='top'>
      <div class="name">{{ username }}</div>
      <div class="icon iconfont"></div>
    </div>
    <div class="bottom">
      <div class="bottom-box">
        <div >个人中心</div>
        <div >晒单评价</div>
        <div >我的喜欢</div>
        <div >小米账户</div>
        <div @click="logout" >退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
  props: {
    username: String
  },
  methods: {
    logout () {
      this.axios.post('/user/logout').then((res) => {
        this.$message.success('退出successful')
        localStorage.removeItem('userId')
        this.$store.dispatch('saveUserName', '')
        this.$store.dispatch('saveCartCount', 0)
        this.$router.push('/index')
      })
    }
  }
}
</script>

<style lang='sass' scoped>
@import '../assets/sass/mixin'
@import '../assets/sass/base'
@import '../assets/sass/config'

.userindex
  position: relative
  height: 40px
  width: 110px
  z-index: 3
  margin-right: 16px
  line-height: 40px
  font-size: 12px
  cursor: pointer

  &:hover
    background: $colorG
    color: $colorA

  &:hover
    .bottom
      height: 164px
      box-shadow: 1px 3px 3px rgba(0,0,0,.15)
      opacity: 1

  .top
    @include flex()

    .name
      width: 75px
      padding: 0 5px
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis

    .icon
      flex: 1
      text-align: center

      &::after
        content: '\e65b'
        font-size: bold

  .bottom
    position: absolute
    top: 100%
    height: 0
    width: 110px
    overflow: hidden
    box-shadow: 1px 0 3px rgba(0,0,0,.15)
    background: $colorG
    color: $colorL
    opacity: 0
    transition: all .4s

    .bottom-box
      @include flexc()
      height: 164px
      padding: 7px 0
      text-align: center

      div
        height:30px
        width: 100%
        line-height: 30px
        color: $colorM

        &:hover
          background-color:$colorN
          color: $colorA
</style>

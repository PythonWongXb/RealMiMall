<!--
 * @Author: your name
 * @Date: 2020-07-09 17:03:27
 * @LastEditTime: 2020-07-13 22:11:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/Login.vue
-->

<template>
  <div class='login'>
    <div class="header">
      <div class="container">
        <div class="logo">
        </div>
        <div class="info">
          <div class="title"></div>
          <div class="subtitle"></div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="container">
        <div class="main-content">
          <div class="head">
            <div class="login-num" @click="flag=1" :class="{'current': flag===1}">账号登录</div>
            <div class="line"></div>
            <div class="login-qr" @click="flag=2" :class="{'current': flag===2}">扫码登录</div>
          </div>
          <div class="form-num" v-if="flag===1">
            <input type="text" class='username' v-model="username" placeholder="邮箱/手机号码/小米ID">
            <input type="text" name="" id="" class='password' v-model="password" placeholder="密码">
            <div class='submit' @click="login">登录</div>
            <div class="setting">
              <div class="left">
                手机短信登录/注册
              </div>
              <div class="right">
                <a href="">立即注册</a>
                <span>|</span>
                <a href="">忘记密码？</a>
              </div>
            </div>
            <div class="other">
              <div class="top">
                <fieldset class="oth_type_tit">
                  <legend align="center" class="oth_type_txt">其他方式登录</legend>
                </fieldset>
              </div>
              <div class="bottom">
                <a class='qq-box'><i class='qq'></i></a>
                <a class='weibo-box'><i class='weibo'></i></a>
                <a class='alipay-box'><i class='alipay'></i></a>
                <a class='wechat-box'><i class='wechat'></i></a>
              </div>
          </div>
          </div>
          <div class="form-qr" v-if="flag===2" >
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3185793251,3299269452&fm=26&gp=0.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="top-box">
          <div class="each">简体</div>
          <div class="each">繁体</div>
          <div class="each">English</div>
          <div class="each">常见问题</div>
          <div class="each">隐私政策</div>
        </div>
        <div class="bottom">
          <span>小米公司版权所有-京ICP备10046444-</span>
          <img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">
          <span>京公网安备11010802020134号-京ICP证110507号</span>
        </div>
      </div>
    </div>
    <div @click="register">注册</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  created () {
  },
  data () {
    return {
      password: 'Pythonista',
      username: 'Pythonista',
      res: {},
      flag: 1
    }
  },
  methods: {
    login () {
      const { username, password } = this
      this.axios
        .post('user/login', {
          username,
          password
        })
        .then((res) => {
          console.log(res)
          this.$store.dispatch('saveUserName', res.username)
          localStorage.setItem('userId', res.username)
          window.location.href = '/index'
        })
    },
    register () {
      this.axios
        .post('user/register', {
          username: 'Pythonista',
          password: 'Pythonista',
          email: '739221432@qq.com'
        })
        .then((res) => {
          alert('successful')
          window.location.href = '/index'
        })
    }
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'
.login
  .footer
    .top-box
      position: relative
      @include flex()
      justify-content: center
      height: 21px
      margin-top: 100px

      .each
        padding: 0 10px
        font-size: 14px
        color: #757575

        &:last-child::after
          content: ''
          height: 0
          width: 0
          margin-left: 0

      .each:after
        content: ''
        position: absolute
        top: 2.5px
        height: 15px
        width: 1px
        margin-left: 10px
        background: #757575

    .bottom
      @include flex()
      justify-content: center
      height: 46px
      font-size: 14px
      color: #757575

  .header
    .logo
      height: 98px
      width: 200px
      background: url(https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png) no-repeat

  .body
    height: 588px
    background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aece569d6689b4c461bb53efd9eea9c7.jpg)

    .container
      display: flex
      justify-content: flex-end
      align-items: flex-end
      height: 100%

    .main-content
      @include flexc()
      height: 556px
      width: 410px
      background: #fff

      .head
        @include flex()
        height: 87px

        .login-num
          line-height: 24px
          font-size: 24px
          color: $colorC
          cursor: pointer

          &.current
            color: $colorA

          &:hover
            color: $colorA

        .line
          height: 29px
          width: 2px
          margin: 0 42px 0 35px
          background-color: $colorN

        .login-qr
          line-height: 24px
          font-size: 24px
          color: $colorC
          cursor: pointer
          &:hover
            color: $colorA

          &.current
            color: $colorA

      .form-num
        @include flexc()
        justify-content: flex-start
        flex: 1
        width: 100%

        input
          height: 48px
          width: 306px
          line-height: 48px
          margin-bottom: 14px
          text-indent: 10px
          border: 1px solid $colorO
          color: $colorB
          outline: none

        .password
          margin-bottom: 0

        .submit
          display: block
          margin-top: 24px
          width: 306px
          height: 50px
          margin-bottom: 14px
          line-height: 50px
          font-size: 14px
          text-align: center
          background-color: $colorA
          color: #fff
          cursor: pointer

        .setting
          @include flex()
          align-items: flex-start
          height:143px
          width: 306px

          .left
            line-height: 14px
            font-size: 14px
            color: $colorA

          span
            padding: 0 5px
            font-size: 14px
            color: $colorD

          .right
            @include flex()
            line-height: 14px
            font-size: 14px
            color: $colorN

            a
              &:hover
                color: $colorA

      .form-qr
        @include flex()
        justify-content: center
        flex: 1
        width: 100%

      .other
        @include flexc()
        width: 306px

        .top
          width: 100%

          .oth_type_tit
            width: 100%
            padding-top: 10px
            border: 0
            border-top: 1px solid $colorO

          .oth_type_txt
            font-size: 12px
            color: $colorO

        .bottom
          @include flex()
          width: 100%
          padding: 0 50px

          .qq-box
            @include box(#0288d1)

          .qq
            @include inbox(-18px, 0)

          .weibo-box
            @include box(#d32f2f)

          .weibo
            @include inbox(-36px, 0)

          .alipay-box
            @include box(#0ae)

          .alipay
            @include inbox(-18px, 0)

          .wechat-box
            @include box(#00d20d)

          .wechat
            @include inbox(-18px, 0)

</style>

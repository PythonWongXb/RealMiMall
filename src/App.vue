<!--
 * @Author: your name
 * @Date: 2020-07-06 10:24:31
 * @LastEditTime: 2020-07-09 17:32:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/App.vue
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {},
  data () {
    return {}
  },
  mounted () {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser () {
      this.axios.get('/user').then((res = {}) => {
        // 保存到vuex中去
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}

</script>

<style lang="sass" scoped>

</style>

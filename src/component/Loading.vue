<!--
 * @Author: your name
 * @Date: 2020-07-05 14:07:30
 * @LastEditTime: 2020-07-13 20:33:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/components/Loading.vue
-->
<template>
  <div class="loading">
    <img src="/imgs/loading-svg/loading-bars.svg" />
  </div>
</template>
<script>
export default {
  name: 'loading'
}
</script>
<style lang="sass" scoped>

.loading
  height: 80px
  padding: 30px 0
  line-height: 80px
  text-align: center

  img
    height: 100%

</style>

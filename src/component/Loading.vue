<!--
 * @Author: your name
 * @Date: 2020-07-05 14:07:30
 * @LastEditTime: 2020-07-05 14:07:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/components/Loading.vue
-->
<template>
  <div class="loading">
    <img src="/imgs/loading-svg/loading-bars.svg" alt />
  </div>
</template>
<script>
export default {
  name: 'loading'
}
</script>
<style lang="scss">
.loading {
  height: 80px;
  line-height: 80px;
  text-align: center;
  padding: 30px 0;
  img {
    height: 100%;
  }
}
</style>

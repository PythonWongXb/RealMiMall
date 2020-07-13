<!--
 * @Author: your name
 * @Date: 2020-07-05 21:33:04
 * @LastEditTime: 2020-07-13 20:34:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/components/NoData.vue
-->
<template>
  <div class="no-data">
    <img src="/imgs/icon-no-data.png" />
    <p>当前暂无提交的订单记录.</p>
  </div>
</template>
<script>
export default {
  name: 'no-data'
}
</script>
<style lang="sass" scoped>

.no-data
  margin: 50px 0
  text-align: center
  font-size: 20px
  color: #999999

  img
    width: 240px
    height: 180px
    margin-bottom: 30px

</style>

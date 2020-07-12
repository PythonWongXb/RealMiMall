<!--
 * @Author: your name
 * @Date: 2020-07-05 21:33:04
 * @LastEditTime: 2020-07-05 21:33:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/components/NoData.vue
-->
<template>
  <div class="no-data">
    <img src="/imgs/icon-no-data.png" alt />
    <p>当前暂无提交的订单记录.</p>
  </div>
</template>
<script>
export default {
  name: 'no-data'
}
</script>
<style lang="scss">
.no-data {
  text-align: center;
  font-size: 20px;
  color: #999999;
  margin: 50px 0;
  img {
    width: 240px;
    height: 180px;
    margin-bottom: 30px;
  }
}
</style>

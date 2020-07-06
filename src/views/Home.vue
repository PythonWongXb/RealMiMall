<!--
 * @Author: your name
 * @Date: 2020-07-06 10:24:31
 * @LastEditTime: 2020-07-06 16:41:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/Home.vue
-->
<template>
  <div>
    <common-nav></common-nav>
    <common-header></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/component/CommonHeader'
import CommonFooter from '@/component/CommonFooter'
import CommonNav from '@/component/CommonNav'
export default {
  name: 'home',
  components: {
    CommonHeader,
    CommonFooter,
    CommonNav
  }
}
</script>

<style lang='sass' scoped>

</style>

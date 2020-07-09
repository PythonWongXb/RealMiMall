/*
 * @Author: your name
 * @Date: 2020-07-06 10:24:31
 * @LastEditTime: 2020-07-09 17:37:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    cartCount: 0
  },
  mutations: {
    saveUserName (state, username) {
      state.username = username
    },
    saveCartCount (state, count) {
      state.cartCount = count
    }
  },
  actions: {
    saveUserName (context, username) {
      context.commit('saveUserName', username)
    },
    saveCartCount (context, count) {
      context.commit('saveCartCount', count)
    }
  },
  modules: {}
})

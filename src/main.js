/*
 * @Author: your name
 * @Date: 2020-06-28 10:03:44
 * @LastEditTime: 2020-07-08 09:59:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'

import {
  Button,
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
axios.interceptors.response.use(function (response) {
  const res = response.data
  const path = location.pathname
  console.log(path)
  if (!res.status) {
    return res.data
  } else if (res.status === 10) {
    if (path !== '/index') {
      router.push('/login')
    }
    return Promise.reject(res)
  } else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
}, (error) => {
  const res = error.response
  Message.error(res.data.message)
  return Promise.reject(error)
})

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  loading: require('./assets/loading-balls.svg')
})

Vue.config.productionTip = false
Vue.prototype.$message = Message
Vue.use(Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

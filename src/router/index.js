/*
 * @Author: your name
 * @Date: 2020-07-06 10:24:31
 * @LastEditTime: 2020-07-06 15:19:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Alipay from '../views/Alipay'
import Cart from '../views/Cart'
import Index from '../views/Index'
import Login from '../views/Login'
import OrderPay from '../views/OrderPay'
import OrderList from '../views/OrderList'
import OrderConfirm from '../views/OrderConfirm'
import ProductChoose from '../views/ProductChoose'
import ProductIntroduce from '../views/ProductIntroduce'
import Register from '../views/Register'
import Home from '../views/Home'
import Order from '../views/Order'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/productchoose/:id',
        name: 'productchoose',
        component: ProductChoose
      },
      {
        path: '/productintroduce/:id',
        name: 'productintroduce',
        component: ProductIntroduce
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'list',
        name: 'order-lilst',
        component: OrderList
      },
      {
        path: 'alipay',
        name: 'order-alipay',
        component: Alipay
      },
      {
        path: 'cart',
        name: 'cart',
        component: Cart
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

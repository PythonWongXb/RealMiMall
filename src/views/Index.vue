<!--
 * @Author: your name
 * @Date: 2020-07-06 11:53:27
 * @LastEditTime: 2020-07-12 16:37:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realmimall/src/views/index.vue
-->
<template>
  <div class='index'>
    <div class="swiper">
      <div class="container">
        <div class="swiper">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in swiperData" :key="item.page"><a href=""><img :src="item.img" alt=""></a></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
        <div class="submenu">
          <each-box v-for="item in menuListAll" :key="item.id"
          :menuList="item.menuList"
          ></each-box>
        </div>
      </div>
    </div>
    <Banner></Banner>
    <flash-buy></flash-buy>
    <banner-adv
    :src="BanneradvList[0]"
    ></banner-adv>
    <phones>
      <each-phone v-for="(item, index) in PhoneList.slice(2, 14)" :key="index"
      :title="item.name"
      :id="item.id"
      :info="item.subtitle"
      :price="item.price"
      :img="item.mainImage.substr(0,2) ==='ht' ? item.mainImage : 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c16238f786e4f93bdb175d7bf21aa47.jpg?thumb=1&w=200&h=200&f=webp&q=90'"
      ></each-phone>
    </phones>
    <banner-adv
    :src="BanneradvList[1]"
    ></banner-adv>
    <home-appliance
    @hot="hot"
    @hotmovie="reverse = false"
    :reverse="reverse"
    >
      <each-phone v-for="item in PhoneListNew" :key="item.id"
      :title="item.name"
      :id="item.id"
      :info="item.subtitle"
      :price="item.price"
      :img="item.mainImage.substr(0,2) ==='ht' ? item.mainImage : 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c16238f786e4f93bdb175d7bf21aa47.jpg?thumb=1&w=200&h=200&f=webp&q=90'"
      ></each-phone>
      <special-box
      :info="reverse ? SpecialPics[0]: SpecialPics[1]"
      ></special-box>
    </home-appliance>
    <banner-adv
    :src="BanneradvList[2]"
    ></banner-adv>
    <Videos-part>
      <each-video v-for="(item,index) in videoList" :key="item.id"
      :title="item.title"
      :desc="item.desc"
      @change="change"
      @record="record(index)"
      ></each-video>
    </Videos-part>
    <video-modal
    :showSlide="showSlide"
    @cancel="cancel"
    :videoLists="videoList"
    :index="index"
    ></video-modal>
    <service-bar></service-bar>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Banner from '../component/Banner'
import FlashBuy from '../component/FlashBuy'
import Phones from '../component/Phones'
import EachPhone from '../component/EachPhone'
import BannerAdv from '../component/BannerAdv'
import HomeAppliance from '../component/HomeAppliance'
import SpecialBox from '../component/SpecialBox'
import VideosPart from '../component/Video'
import EachVideo from '../component/EachVideo'
import ServiceBar from '../component/ServicsBar'
import VideoModal from '../component/VideoModal'
import EachBox from '../component/EachBox'

import 'swiper/css/swiper.css'

export default {
  name: 'index',
  mounted () {
    this.getProduct()
  },
  data () {
    return {
      index: 0,
      showSlide: '',
      reverse: false,
      swiperOptions: {
        loop: true,
        effect: 'fade',
        autoplay: {
          disableOnInteraction: false,
          delay: 1000 // 1秒切换一次
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperData: [
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1eafff325f0e96d5c58929487f82f21d.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          page: 42
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5ce10d98e0beecf3c5a331a52b71621.jpg?w=2452&h=920',
          page: 43
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12a95d14eec558d7ebd585b1b3b725b0.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          page: 44
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a44503bf30775c743866551c813d4569.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          page: 45
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/956e0b7aa4cf7679e795b8db74d2b14a.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          page: 46
        }
      ],
      menuListAll: [
        {
          menuList: [
            [
              {
                id: 30,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米CC9'
              },
              {
                id: 31,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米8青春版'
              },
              {
                id: 32,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: 'Redmi K20 Pro'
              },
              {
                id: 33,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 34,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 35,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              }
            ],
            [0, 0, 0, 0, 0, 0]
          ]
        },
        {
          menuList: [
            [
              {
                id: 30,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米CC9'
              },
              {
                id: 31,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米8青春版'
              },
              {
                id: 32,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: 'Redmi K20 Pro'
              },
              {
                id: 33,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 34,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 35,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              }
            ],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ]
        },
        {
          menuList: [
            [
              {
                id: 30,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米CC9'
              },
              {
                id: 31,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米8青春版'
              },
              {
                id: 32,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: 'Redmi K20 Pro'
              },
              {
                id: 33,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 34,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 35,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              }
            ],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ]
        },
        {
          menuList: [
            [
              {
                id: 30,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米CC9'
              },
              {
                id: 31,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米8青春版'
              },
              {
                id: 32,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: 'Redmi K20 Pro'
              },
              {
                id: 33,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 34,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 35,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              }
            ],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ]
        },
        {
          menuList: [
            [
              {
                id: 30,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米CC9'
              },
              {
                id: 31,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米8青春版'
              },
              {
                id: 32,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: 'Redmi K20 Pro'
              },
              {
                id: 33,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 34,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 35,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              }
            ],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ]
        },
        {
          menuList: [
            [
              {
                id: 30,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米CC9'
              },
              {
                id: 31,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米8青春版'
              },
              {
                id: 32,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: 'Redmi K20 Pro'
              },
              {
                id: 33,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 34,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 35,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              }
            ],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ]
        },
        {
          menuList: [
            [
              {
                id: 30,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米CC9'
              },
              {
                id: 31,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米8青春版'
              },
              {
                id: 32,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: 'Redmi K20 Pro'
              },
              {
                id: 33,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 34,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 35,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              }
            ],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ]
        },
        {
          menuList: [
            [
              {
                id: 30,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米CC9'
              },
              {
                id: 31,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米8青春版'
              },
              {
                id: 32,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: 'Redmi K20 Pro'
              },
              {
                id: 33,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 34,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 35,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              }
            ],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ]
        },
        {
          menuList: [
            [
              {
                id: 30,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米CC9'
              },
              {
                id: 31,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米8青春版'
              },
              {
                id: 32,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: 'Redmi K20 Pro'
              },
              {
                id: 33,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 34,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 35,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              }
            ],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ]
        },
        {
          menuList: [
            [
              {
                id: 30,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米CC9'
              },
              {
                id: 31,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '小米8青春版'
              },
              {
                id: 32,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: 'Redmi K20 Pro'
              },
              {
                id: 33,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 34,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              },
              {
                id: 35,
                img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
                name: '移动4G专区'
              }
            ],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ]
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '小米CC9'
          },
          {
            id: 31,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '小米8青春版'
          },
          {
            id: 32,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          },
          {
            id: 34,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          },
          {
            id: 35,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      menuList1: [
        [
          {
            id: 30,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '小米CC9'
          },
          {
            id: 31,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '小米8青春版'
          },
          {
            id: 32,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          },
          {
            id: 34,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          },
          {
            id: 35,
            img:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      PhoneList: [
      ],
      BanneradvList: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17ae6ffbdd4156119e41dec7d85ebced.jpeg?thumb=1&w=1226&h=120&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3b86ede4dd31d7c126d56fbdde4f855.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1226&h=120&f=webp&q=90'
      ],
      SpecialPics: [
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg?thumb=1&w=100&h=100&f=webp&q=90', title: '小米壁画电视 65英寸', price: 6990, id: 1, name: '热门影音' },
        { img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=100&h=100', title: '9号平衡车', price: 1999, id: 2, name: '热门' }

      ],
      videoList: [
        { title: 'Redmi 10X系列发布会', desc: '10X系列发布会', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4', id: 0 },
        { title: '小米青春10发布会', desc: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4', id: 1 },
        { title: '小米10 8K手机拍大片', desc: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4', id: 2 },
        { title: '10X系列发布会', desc: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4', id: 3 }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    PhoneListNew () {
      if (this.reverse) {
        return this.PhoneList.slice(2, 9).reverse()
      } else {
        return this.PhoneList.slice(2, 9)
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Banner,
    FlashBuy,
    Phones,
    EachPhone,
    BannerAdv,
    HomeAppliance,
    SpecialBox,
    VideosPart,
    EachVideo,
    ServiceBar,
    VideoModal,
    EachBox
  },
  directives: {
    swiper: directive
  },
  methods: {
    getProduct () {
      this.axios.get('/products').then((res) => {
        this.PhoneList = res.list
      })
    },
    hot () {
      this.reverse = true
    },
    change () {
      this.showSlide = 'slideDown'
    },
    cancel () {
      this.showSlide = 'slideUp'
      setTimeout(() => {
        this.showSlide = ''
      }, 600)
    },
    record (i) {
      this.index = i
    }
  }
}
</script>

<style lang='sass' scoped>
@import url('//at.alicdn.com/t/font_1894585_h5kk296vn1.css')
@import '../assets/sass/base'
@import '../assets/sass/mixin'
@import '../assets/sass/config'

.index
  .banner-adv
    padding: 22px 0
    box-sizing: content-box
  .swiper
    height: 460px
    .container
      position: relative
      height: 460px
      .swiper
        .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
          width: auto
          position: absolute
          right: 30px
          left: auto
        .swiper-container
          width: 100%
          height: 100%
        .swiper-button-next
          height: 69px
          width: 41px
          line-height: 69px
          text-align: center
          top: calc(50% - 35px)
          right: 0
          z-index: 2
          outline: none
          --swiper-navigation-size: 20px
          --swiper-navigation-color: #ccc
          border-radius: 5px 0 0 5px
          &:hover
            background: rgba(0,0,0,.4)

        .swiper-button-prev
          height: 69px
          width: 41px
          line-height: 69px
          text-align: center
          top: calc(50% - 35px)
          left: 234px
          z-index: 2
          outline: none
          --swiper-navigation-size: 20px
          --swiper-navigation-color: #ccc
          border-radius: 0 5px 5px 0

          &:hover
            background: rgba(0,0,0,.4)
      .submenu
        position: absolute
        top: 0
        left: 0
        height: 100%
        width: 234px
        background: rgba(105,101,101,.6)
        z-index: 2
        @include flexc()
        padding: 20px 0
</style>

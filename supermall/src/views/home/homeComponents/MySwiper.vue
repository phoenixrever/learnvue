<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="b in banner" :key="b.acm"><img :src="b.image" @load="imageLoaded"/></swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-pagination',
    title: 'Pagination',
    props: {
      banner: Array
    },
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true
          },
          firstImgLoaded: false
        }
      }
    },
    methods: {
      imageLoaded() {
        //第一张图加载完成已经确定了duv 高度
        if (!this.firstImgLoaded)
          this.$emit('swiperImageLoaded');
        this.firstImgLoaded = true
      }
    }
  }
</script>
<style>
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination {
    cursor: pointer;
  }
</style>

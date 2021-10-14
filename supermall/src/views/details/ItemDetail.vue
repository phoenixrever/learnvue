<template>
  <div class="detail">
    <nav-bar class="detail-nav">
      <div slot="left-nav" @click="prev"><img src="~assets/img/common/back.svg"/></div>
      <slot slot="middle-nav">
        <tab-view class="middle-nav" :currentIndex="currentIndex" :titles="titles"
                  @changeData="changeData"></tab-view>
      </slot>
      <slot slot="right-nav"><img src="~assets/img/common/arrow-right.svg"</slot>
    </nav-bar>
    <better-scroll class="content" ref="betterScroll" :option="option" @getDistance="getDistance"
                   @pullUp="pullUp" :isPullUpLoad="isPullUpLoad">
      <detail-swiper ref="detail-swiper" :detailImages="detail.images"></detail-swiper>
      <detail-info v-if="detail.sellInfo" :detail="detail"></detail-info>
      <shop-info :logo="detail.logo" :title="detail.title"></shop-info>
      <item-image-list :itemImages="itemImages" @allImgLoaded="allImgLoaded"></item-image-list>
      <item-params ref="itemParam" :itemParamImg="detail.itemParamImg"></item-params>
      <item-comments ref="itemComments" :itemComments="detail.comment"></item-comments>
    </better-scroll>
    <bottom-bar>
      <bottom-content @addToCart="addToCart"></bottom-content>
    </bottom-bar>
    <back-top class="backTop" @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import {getDetail, getDetailsImages, ItemInfo} from "network/detailApi.js"
  import {BackTopMixin} from 'components/common/mixin/BackTopMixin.js'
  import NavBar from 'components/common/navbar/NavBar'
  import DetailSwiper from 'views/details/childComps/DetailSwiper.vue'
  import ItemImageList from 'views/details/childComps/ItemImageList.vue'
  import ItemComments from 'views/details/childComps/ItemComments.vue'
  import ItemParams from 'views/details/childComps/ItemParams.vue'
  import DetailInfo from 'views/details/childComps/ItemInfo.vue'
  import ShopInfo from 'views/details/childComps/ShopInfo.vue'
  import BetterScroll from 'components/common/scrollContainer/BetterScroll'
  import TabView from 'components/content/tabview/TabView'
  import BottomBar from 'components/common/bottom-bar/BottomBar.vue'
  import BottomContent from 'views/details/childComps/BottomContent.vue'
  import {mapActions} from 'vuex'

  export default {
    name: "ItemDetail",
    mixins: [BackTopMixin],
    components: {
      NavBar,
      DetailSwiper,
      DetailInfo,
      BetterScroll,
      ShopInfo,
      ItemImageList,
      ItemParams,
      TabView,
      ItemComments,
      BottomBar,
      BottomContent,
    },
    data() {
      return {
        detail: {},
        option: {
          probeType: 3,
          pullUpLoad: true
        },
        currentIndex: 0,
        titles: ["商品", "参数", "评论", "推荐"],
        isPullUpLoad: false,
        goods: {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        itemImages: [],
        scrollPosition: [],
      }
    },
    watch: {
      $route(to, from) {
        if (to.path.indexOf('detail') > 0)
          this.getDetail(to.params.id)
      }
    },
    created() {
      this.getDetail(this.$route.params.id);
      //监听dom加载完成 写这里没啥特别作用
      this.$nextTick(() => {
        // console.log("-----");
      })
    },
    methods: {
      ...mapActions(['addCart']),
      getDetail(id) {
        getDetail(id).then(({data}) => {
          console.log(data[id - 1]);
          setTimeout(() => {
            this.detail = new ItemInfo(data[id - 1]);
            this.getDetailsImages()
          }, 100)
        })
      },
      prev() {
        this.$router.back()
      },
      pullUp() {
        // return new Promise((resolve, reject) => {
        //   this.isPullUpLoad = true;
        //   setTimeout(() => {
        //     this.getDetailsImages();
        //     resolve()
        //   }, 0);
        // }).then(() => {
        //   console.log("finished");
        //   this.$refs.betterScroll.bs.finishPullUp();
        //   this.$refs.betterScroll.bs.refresh();
        //   this.isPullUpLoad = false;
        // })
      },
      getDistance(positiony) {
        // console.log(-positiony);
        this.isShow = positiony < this.scrollPosition[this.scrollPosition.length - 1] + 1000;
        this.scrollPosition.forEach((p, index) => {
          if (positiony <= p) {
            this.currentIndex = index
          }
        });
        // this.isFixTabView = (-positiony) + 44 > this.tabViewOffTop
      },
      getDetailsImages() {
        getDetailsImages().then(data => {
          this.itemImages = data['pop'][0].list;
        }).catch(err => {
          console.log(err);
        })
      },
      allImgLoaded() {
        this.scrollPosition = [];
        this.$refs.betterScroll.bs.refresh();
        let detailSwiper = -this.$refs['detail-swiper'].$el.offsetTop + 50;//顶部高度
        let itemParam = -this.$refs.itemParam.$el.offsetTop + 50;
        let itemComments = -this.$refs.itemComments.$el.offsetTop + 50;
        this.scrollPosition.push(detailSwiper, itemParam, itemComments)
      },
      changeData(index) {
        this.currentIndex = index;
        this.$refs.betterScroll.scrollTo(0, this.scrollPosition[index], 500)
      },
      addToCart() {
        let payload = {};
        payload.id = this.detail.id;
        payload.image = this.detail.images[1];
        payload.price = this.detail.price;
        payload.title = this.detail.title;
        payload.logo = this.detail.logo;
        this.addCart(payload).then(res=>{
            console.log(res);
            this.$toast.show(res,2000)
        });
      }
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px);
    overflow: hidden;
  }

  .detail-nav {
    /*background-color: var(--color-tint);*/
    /*color: white;*/
    margin-top: 5px;
    font-size: 15px;
    line-height: 40px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .2); /* x偏移(正数右) y偏移(正数下) 模糊度 颜色*/
  }

  .detail-nav img {
    margin-top: 8px;
  }

  .middle-nav {
    margin: 0 auto;
    width: 80%;
  }

  .middle-nav >>> .active {
    color: var(--color-tint);

  }

  .middle-nav >>> .tab-view-item span {
    padding: 0px;
    border-bottom: none;
  }
</style>

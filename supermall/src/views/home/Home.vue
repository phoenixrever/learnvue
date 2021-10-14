<template>
  <div id="container">
    <nav-bar class="nav">
      <div slot="middle-nav">购物车</div>
    </nav-bar>
    <tab-view ref="tebView2" v-show="isFixTabView" :currentIndex="currentIndex" :titles="titles"
              @changeData="changeData"></tab-view>
    <better-scroll class="content" ref="betterScroll" :option="option" @getDistance="getDistance"
                   @pullUp="pullUp" :isPullUpLoad="isPullUpLoad">
      <my-swiper :banner="banner" @swiperImageLoaded="swiperImageLoaded"></my-swiper>
      <recommend :recommend="recommend"></recommend>
      <feature></feature>
      <tab-view ref="tebView" v-show="!isFixTabView" :currentIndex="currentIndex" :titles="titles"
                @changeData="changeData"></tab-view>
      <goods-list :currentData="currentData"></goods-list>
    </better-scroll>
    <back-top class="backTop" @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import HomeApi from 'network/homeApi'
  import {debounce} from 'common/utils/debounce.js'
  import {BackTopMixin} from 'components/common/mixin/BackTopMixin.js'
  import NavBar from 'components/common/navbar/NavBar'
  import BetterScroll from 'components/common/scrollContainer/BetterScroll'
  import TabView from 'components/content/tabview/TabView'
  import GoodsList from 'components/content/goods/GoodsList'

  import MySwiper from 'views/home/homeComponents/MySwiper'
  import Recommend from 'views/home/homeComponents/Recommend'
  import Feature from 'views/home/homeComponents/Feature'


  export default {
    name: "Home",
    components: {
      NavBar,
      BetterScroll,
      TabView,
      GoodsList,
      MySwiper,
      Recommend,
      Feature,
    },
    mixins: [BackTopMixin],
    data() {
      return {
        banner: [],
        recommend: [],
        titles: ['综合', '女装', '男装'],
        goods: {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentData: [],
        option: {
          probeType: 3,
          pullUpLoad: true
        },
        // isShow: false,minxin中包含
        isPullUpLoad: false,
        currentType: 'pop',
        tabViewOffTop: 0,
        isFixTabView: false,
        currentIndex: 0,
        saveY: 0
      }
    },
    created() {
      this.getHomeMultiData();
      this.getHomeGoods(this.currentType);
      //不初始化手机上点会回到顶部
      this.getHomeGoods("news");
      this.getHomeGoods("sell");
    },
    methods: {
      swiperImageLoaded() {
        this.getTabViewOffSetTop()
      },
      getTabViewOffSetTop() {
        this.tabViewOffTop = this.$refs.tebView.$el.offsetTop
      },
      pullUp() {
        return new Promise((resolve, reject) => {
          this.isPullUpLoad = true;
          setTimeout(() => {
            this.getHomeGoods(this.currentType);
            resolve()
          }, 100);
        }).then(() => {
          console.log("finished");
          this.$refs.betterScroll.bs.finishPullUp();
          this.$refs.betterScroll.bs.refresh();
          this.isPullUpLoad = false;
        })
      },
      getHomeMultiData() {
        HomeApi.getHomeMultiData().then(data => {
          this.banner = data.data.banner.list;
          this.recommend = data.data.recommend.list;
        });
      },
      getDistance(positiony) {
        this.isShow = positiony < -4000;
        // console.log(-positiony);
        this.isFixTabView = (-positiony) + 44 > this.tabViewOffTop
      },
      getHomeGoods(type) {
        HomeApi.getHomeGoods().then(data => {
          const page = this.goods[type].page + 1;
          const pop = data[type][page - 1].list;
          this.goods[type].list.push(...pop);
          this.goods[type].page = page;
          this.currentData = this.goods[type].list
          // console.log(this.goods);
        }).catch(err => {
          console.log(err);
        })
      },
      changeData(index) {
        let type = '';
        switch (index) {
          case 0:
            type = 'pop';
            break;
          case 1:
            type = 'news';
            break;
          case 2:
            type = 'sell';
            break;
          default:
            type = 'pop'
        }
        this.currentType = type;
        this.currentIndex = index;
        // this.getHomeGoods(type);
        this.currentData = this.goods[type].list;
        if (this.goods[type].page === 1){
          this.$refs.betterScroll.scrollTo(0, -this.tabViewOffTop + 44);
        }

      },
      backTop() {
        this.$refs.betterScroll.scrollTo(0, 0);
      }
    },
    //拿出最整个对象性能应该不行???
    mounted() {
      // this.$refs.betterScroll.bs.on('scroll', position => {
      //   // console.log(position);
      //   this.distance=position.y
      // });
      // 元素才有 offSetTop 属性 在vue里面 所有组件都有#el属性拿到元素
      // 接收事件组件
      //注意传入的方法没有()
      // const refresh = debounce(this.getTabViewOffSetTop,1000);
      // this.$bus.$on('imageLoaded', () => {
      //   console.log(" 监听到事件");
      //   refresh();
      // });
    },
    activated() {
      // 激活滚动到位置还原上一页面位置
      this.$refs.betterScroll.bs.refresh();//必须放在上面不然还是会往上滚动
      this.$refs.betterScroll.scrollTo(0, this.saveY, 0);

    },
    deactivated() {
      this.saveY=this.$refs.betterScroll.bs.y
    }
  }
</script>

<style scoped>
  #container {
    height: 100vh;
    /*margin-top:44px*/
  }

  .nav {
    background-color: var(--color-tint);
    color: white;
  }

  .content {
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>

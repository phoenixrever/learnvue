<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullUp from '@better-scroll/pull-up'
  import ObserveDOM from '@better-scroll/observe-dom'

  BScroll.use(ObserveDOM);
  BScroll.use(PullUp);
  export default {
    name: "BetterScroll",
    //created  只是创建 没有挂载 所有js new 都要在mounted里面
    props:{
      option:Object,
      isPullUpLoad:Boolean
    },
    data(){
     return {
       bs:null,
     }
    },
    methods:{
      scrollTo(x,y,duration=500){
        this.bs.scroller.scrollTo(x,y,duration);
      }
    },
    mounted() {
      this.bs = new BScroll(this.$refs.wrapper, {
        // movable: true,
        // zoom: true,
        //2 手指在屏幕的时候侦测,离开靠惯性的时候不能侦侦测测
        //3 只要滚动都侦测
        probeType: this.option.prototype,
        click: true,
        // observeDOM: true,//去掉滚动会更平滑  img @load 自己refresh TODO...
        pullUpLoad: this.option.pullUpLoad
      });
      if(this.option.pullUpLoad){
        this.bs.on('pullingUp',()=>{
          this.$emit("pullUp");
        });
      }
      this.bs.on('scroll', position => {
        this.$emit("getDistance",position.y)
      });
    }
  }
</script>

<style scoped>
  .wrapper {
    /*overflow: hidden;*/
  }
</style>

<template>
<!--  keep alive + vue router 也能行 看怎么选了-->
  <div class="tab-view">
    <div v-for="(title,index) in titles" :key="title" class="tab-view-item" @click="itemClick(index)">
      <span :class="{active:currentIndex===index}">{{title}}</span></div>
  </div>
</template>

<script>
  export default {
    name: "TaBView",
    props: {
      titles: Array,
      deafult() {
        return []
      },
      currentIndex:Number
    },
    data() {
      return {
      }
    },
    methods: {
      itemClick(index) {
        this.$emit('changeData',index)
      }
    }
  }
</script>

<style scoped>
  .tab-view {
    display: flex;
    font-size: 15px;
    justify-content: space-around;/*和在下面写flex: 1; 效果一样*/
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 999;
  }

  .tab-view-item {
    /*flex: 1;*/
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .tab-view-item span{
   padding: 5px ;
  }
  .active{
    border-bottom: 3px solid var(--color-tint);
    color:var(--color-tint);
  }
</style>

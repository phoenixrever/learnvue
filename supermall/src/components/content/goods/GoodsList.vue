<template>
  <div class="goods">
    <div v-for="item in currentData">
      <GoodsItem  :goodsItem="item" ></GoodsItem>
    </div>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'

  export default {
    name: "GoodList",
    props:{
      currentData:Array
    },
    components: {
      GoodsItem
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    width: 100%;
    flex-wrap: wrap;/* 不要在同一行*/
    justify-content: space-evenly;/*均分*/
  }
</style>

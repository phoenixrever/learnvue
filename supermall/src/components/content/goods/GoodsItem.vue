<template>
  <div class="goods-item" @click="itemDetail">
    <img v-lazy="goodsItem.imageUrl"/>
    <div class="info">{{goodsItem.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodsItem: Object
    },
    created() {
    },
    methods:{
      itemDetail(){
        this.$router.push(`/detail/${this.goodsItem.id}`)
      }
    }
  }
</script>

<style scoped>
  .goods-item  {
    padding-bottom: 20px;
  }
  .goods-item img {
    width: 100%;
  }
  .goods-item{
    text-align: center;
  }
</style>

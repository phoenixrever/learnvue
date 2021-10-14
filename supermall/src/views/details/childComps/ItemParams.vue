<template>
  <div class="content">
    <h2 class="title">商品参数 </h2>
    <img :src="itemParamImg" alt="">
  </div>
</template>

<script>
  export default {
    name: "ItemParams",
    props: {
      itemParamImg: String
    }
  }
</script>

<style scoped>
  .content{
    margin-top: 30px;
    border-top:5px solid rgba(255, 37, 179, 0.7);
    box-shadow: #2c3e50;
  }
  .title{
    margin: 30px;
  }
</style>

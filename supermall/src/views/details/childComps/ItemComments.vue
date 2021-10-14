<template>
  <div class="content">
    <h2 class="title">商品评论 </h2>
    <hr>
    <img :src="itemComments" alt="">
  </div>
</template>

<script>
  export default {
    name: "ItemComments",
    props: {
      itemComments: String
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .content {
    margin-top: 30px;
    border-top: 5px solid rgba(255, 37, 179, 0.7);
    box-shadow: #2c3e50;
  }
  .content img{
    width: 100%;
  }
  .title {
    margin: 30px;
  }
</style>

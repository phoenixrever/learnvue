<template>
  <div class="content">
    <div class="left">
      <div>
        <img slot="item-icon" src="~assets/img/detail/1.jpg"/>
        <h4>客服</h4>
      </div>
      <div>
        <img slot="item-icon" src="~assets/img/detail/2.jpg"/>
        <h4>店铺</h4>
      </div>
      <div>
        <img slot="item-icon" src="~assets/img/detail/3.jpg"/>
        <h4>收藏</h4>
      </div>
    </div>
    <div class="right">
      <span @click="addToCart">加入购物车</span>
      <span @click="buy">购买</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "BottomContent",
    methods:{
      addToCart(){
        this.$emit("addToCart")
      },
      buy(){
        this.$router.push("/shoppingCart")
      }
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }

  .left, .right {
    display: flex;
    justify-content: space-around;
    flex: 1;
  }

  .right {
    width: 100%;
    line-height: 49px;
    align-items: center;
    text-align: center;
  }

  .right span:first-child {
    background-color: #f7ff3d;
    width: 100%;
  }

  .right span:last-child {
    background-color: #ff0499;
    width: 100%;
    color: white;
  }
.left{
  font-size: 15px;
}
  .content img {
    height:22px;
  }
</style>

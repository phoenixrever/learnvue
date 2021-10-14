<template>
  <div class="itemInfo">
    <h3>{{detail.desc}}</h3>
    <div class="price"><span class="new-price">{{detail.price}}</span>
      <span class="old-price">{{detail.oldPrice}}</span>
      <span class="priceTip">{{"惊爆价"}}</span>
    </div>
    <div class="sellInfo">
              <span
                v-for="(item,index) in Object.values(detail.sellInfo)">{{Object.keys(detail.sellInfo)[index]+":"+item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ItemInfo",
    props: {
      detail: Object
    },
    data() {
      return{
        sellInfo:[]
      }
    },
  }
</script>

<style scoped>
  .itemInfo {
    height: 150px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .price span {
    margin-right: 10px;
  }

  .new-price {
    font-size: 25px;
    color: var(--color-tint);
  }

  .old-price {
    text-decoration: line-through;
    color: gray;
    font-size: 15px;
  }

  .priceTip {
    position: relative;
    padding: 3px;
    top: -10px;
    left: -8px;
    background-color: #ff333e;
    font-size: 15px;
    border-radius: 5px;
    color: white;
  }

  .sellInfo {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
</style>

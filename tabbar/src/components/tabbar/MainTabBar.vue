<template>
  <tab-bar>
    <template v-slot:home>
      <tab-bar-item path="/home" activeColor="deeppink">
        <fa class="faIcon" icon="home" size="lg"></fa>
        <div>首页</div>
      </tab-bar-item>
    </template>
    <template v-slot:shopCat>
      <tab-bar-item path="/shoppingCart" activeColor="blue">
        <fa class="faIcon" size="lg" icon="shopping-cart"></fa>
        <div>购物车</div>
      </tab-bar-item>
    </template>
    <template v-slot:classify>
      <tab-bar-item path="/classify" activeColor="yellow">
        <fa class="faIcon" size="lg" icon="dizzy"></fa>
        <div>分类</div>
      </tab-bar-item>
    </template>
    <template v-slot:profile>
      <tab-bar-item path="/profile" activeColor="green">
        <fa class="faIcon" size="lg" icon="meh"></fa>
        <div>我的</div>
      </tab-bar-item>
    </template>
  </tab-bar>
</template>

<script>
  import TabBar from "@/components/tabbar/TabBar";
  import TabBarItem from '@/components/tabbar/TabBarItem'

  export default {
    name: "TabBarSkeleton",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="nav-bar">
    <div class="left-nav">
      <slot name="left-nav"></slot>
    </div>
    <div class="middle-nav" >
      <slot name="middle-nav"></slot>
    </div>
    <div class="right-nav">
      <slot name="right-nav"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    text-align: center;
    /*使用原生滚动为了不跟随导航栏一起滚动 betterscroll 设置了滚动区域 不需要了*/
    /*position:fixed;*/
    /*top:0;*/
    /*width:100%;*/
    z-index:100
  }

  .left-nav, .right-nav {
    width: 60px;
  }

  .middle-nav{
    flex:1
  }
</style>

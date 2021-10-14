<template>
  <div id="bottom-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "BottomBar",
    components: {
    }
  }
</script>

<style scoped>
  #bottom-bar {
    background-color: #f6f6f6;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2 ); /* x偏移(正数右) y偏移(正数下) 模糊度 颜色*/
    z-index:999
  }
</style>

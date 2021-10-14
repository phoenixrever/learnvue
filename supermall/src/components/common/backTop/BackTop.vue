<template>
  <div class="backTop"><img src="~assets/img/common/top.png" alt=""></div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .backTop img {
    width: 100%;
  }
  .backTop {
    position: fixed;
    bottom: 50px;
    z-index: 999;
    width: 60px;
    right: 10px;
  }

</style>

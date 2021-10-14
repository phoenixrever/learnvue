<template>
    <div class="feature">
      <a href="">
        <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="imageLoaded"/>
      </a>
    </div>
</template>

<script>

    export default {
        name: "Feature",
      methods:{
        imageLoaded(){
          this.$bus.$emit("imageLoaded")
        }
      }
    }
</script>

<style scoped>
  .feature img{
    width: 100%;
  }
</style>

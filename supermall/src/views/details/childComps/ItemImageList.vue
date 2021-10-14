<template>
  <div class="itemImages">
    <div v-for="img in itemImages">
      <img v-lazy="img.imageUrl" alt="" @load="countImgs">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ItemImageList",
    props:{
      itemImages:Array
    },
    data(){
      return{
        count:0
      }
    },
    methods:{
      countImgs(){
        if(++this.count===this.itemImages.length){
          this.$emit("allImgLoaded")
        }
      }
    }
  }
</script>

<style scoped>
  .itemImages {
    width: 100%;
    text-align: center;
  }
  .itemImages img{
    width: 100%;
    text-align: center;
  }
</style>

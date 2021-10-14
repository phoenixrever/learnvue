<template>
  <div class="recommend">
    <div v-for="r in recommend">
      <a :href="r.link">
        <img :src="r.image" @load="imageLoaded"/>
        <div>{{r.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommend: Array
    },
    methods:{
      imageLoaded(){
        this.$bus.$emit("imageLoaded")
      }
    }

  }
</script>

<style scoped>
  .recommend {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 12px;
    padding: 15px 0;
    border-bottom: 8px solid #eee;
  }

  .recommend img {
    width: 80%;
    margin-bottom: 5px;
    /*如果是img 消除图片上下空间*/
    /*vertical-align: middle;*/
  }

  .recommend a {
    text-decoration: none;
    cursor: pointer;
  }
</style>

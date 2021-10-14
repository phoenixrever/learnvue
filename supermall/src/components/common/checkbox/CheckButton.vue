<template>
  <div :class="{checkBox:checkData.checked}" class="notChecked" @click="checkBox(checkData.id)">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      checkData:{
        type:Object
      }
    },
    methods: {
      checkBox(id) {
        //不要修改本地属性要修改vuex的属性
        this.$store.commit("checked", id)
      }
    }

  }
</script>

<style scoped>
  .checkBox {
    text-align: center;
    background-color: #058b09;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    /*margin: auto 0 auto 20px;*/
    /*transform: scale(1.5, 1.5);*/
  }
  .notChecked img{
    border: 1px solid #058b09;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
</style>

<template>
  <div class="toast" v-show="isActive">
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return{
        isActive:false,
        msg:''
      }
    },
    methods:{
      show(msg,duration=1500){
        this.isActive=true;
        this.msg=msg;
        setTimeout(()=>{
          this.isActive=false
        },duration)
      }

    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,.8);
    color: white;
    padding: 10px 15px ;
    border-radius: 5px ;
    z-index: 999;
  }
</style>

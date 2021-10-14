<template>
  <div class="tab-bar-item" :style="{color:isActive?activeColor:''}" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <slot name="item-text"></slot>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor:{
        type:String,
        default:'deeppink'
      }
    },
    data() {
      return {
        viewPath: this.path,
      }
    },
    //不能直接放data里面  计算属性会监听props
    computed:{
      //只用读 分开写 不然warn
      isActive:{
        set:function () {

        },
        get:function () {
          return  this.$route.path.indexOf(this.viewPath)!==-1
        }
      }
    },
    methods: {
      itemClick() {
        this.isActive="active";
        this.$router.replace(this.viewPath)
      }
    },

  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    padding-top: 5px;
    height: 49px;
    font-size: 14px;
    /*如果是img 消除图片上下空间*/
    /*vertical-align: middle;*/
  }

  .tab-bar-item img {
    height: 25px;
    /*如果是img 消除图片上下空间*/
    vertical-align: middle;
  }
</style>

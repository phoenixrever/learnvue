<template>
  <div class="bottom-bar">
    <div :class="{checkBox:checked}" class="notChecked" @click="selectAll">
      <img v-if="!someSelected" src="~assets/img/cart/tick.svg" alt="">
      <img v-if="someSelected" src="~assets/img/profile/vip.svg" alt="">
    </div>
    <div class="select-all"><span>全选</span><span>合计:{{total}}</span></div>
    <div class="count"><span>去计算({{count}})</span></div>
  </div>
</template>

<script>
  import CheckButton from "components/common/checkbox/CheckButton.vue"

  export default {
    name: "BottomBar",
    props: {
      checkData: {
        type: Object,
        default() {
          return {
            checked: true
          }
        }
      },
      cartList: []
    },
    data() {
      return {
        checked: false,
        // someSelected: false
      }
    },
    computed: {
      total() {
        return "¥ " + this.cartList.filter(item => item.checked === true)
          .reduce((oldValue, newValue) => {
            let number = newValue.price.split(" ")[1] * newValue.count;//转成数字
            return oldValue + number
          }, 0).toFixed(2)//保留2位小数
      },
      count() {
        return this.cartList.filter(item => item.checked === true).length
      },
      someSelected() {
       let allLengthFlag=this.cartList.filter(item => item.checked === true).length;
        if (allLengthFlag > 0 && allLengthFlag < this.cartList.length) {
          this.checked = true;
          return true
        } else if (allLengthFlag === 0) {
          this.checked = false;
          return false
        } else {
          this.checked = true;
          return  false
        }
      }
    },
    // watch: {
    //   allLengthFlag() {
    //     console.log(this.allLengthFlag);
    //     if (this.allLengthFlag > 0 && this.allLengthFlag < this.cartList.length) {
    //       this.checked = true;
    //       this.someSelected = true
    //     } else if (this.allLengthFlag === 0) {
    //       this.checked = false;
    //       this.someSelected = false
    //     } else {
    //       this.checked = true;
    //       this.someSelected = false
    //     }
    //   }
    // },
    methods: {
      selectAll() {
        //不要修改本地属性要修改vuex的属性
        if (this.someSelected) {
          this.$store.commit("selectAll")
        } else {
          this.checked = !this.checked;
          if (this.checked) {
            this.$store.commit("selectAll")
          } else {
            this.$store.commit("selectNone")
          }
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    height: 35px;
    width: 100%;
    position: fixed;
    bottom: 50px;
    background-color: #eee;

    /*align-items: center;*/
  }

  .checkBox {
    text-align: center;
    background-color: #058b09;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: auto 0 auto 20px;
    flex: 1;
    flex-grow: 0
    /*transform: scale(1.5, 1.5);*/
  }

  .select-all {
    flex: 10;
    margin: auto 0 auto 10px;
  }

  .select-all span:last-child {
    margin-left: 30px;
    color: red;
  }

  .notChecked img {
    /*border: 1px solid #058b09;*/
    border: 1px solid #058b09;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .notChecked {
    text-align: center;
    width: 20px;
    height: 20px;
    margin: auto 0 auto 20px;
  }


  .count {
    flex: 5;
    display: flex;
    color: white;
    margin: auto;
    height: 100%;
    background-color: red;
  }

  .count span {
    margin: auto;
  }
</style>

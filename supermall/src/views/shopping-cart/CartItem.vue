<template>
  <div>
    <table class="cartItem" v-for="c in cartList">
      <tr>
        <td>
          <check-button :checkData="{checked:c.checked,id:c.id}"></check-button>
        </td>
        <td>
          <div class="image"><img :src="c.image" alt=""></div>
        </td>
        <td class="info">
          <table>
            <tr>
              <td>
                <div>{{c.title}}</div>
              </td>
              <td>
                <div class="price">{{c.price}}</div>
              </td>
            </tr>
            <tr>
              <td> <span class="logo">
              <img :src="c.logo" alt="">
            </span></td>
              <td class="text">    <span>
              {{"X "+c.count}}
            </span></td>
            </tr>
          </table>


        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import CheckButton from "components/common/checkbox/CheckButton.vue"
  export default {
    name: "CartItem",
    props: {
      cartList: Array
    },
    components:{
      CheckButton
    },
    data(){
      return{
      }
    },
    methods:{
    },
  }
</script>

<style scoped>
  .cartItem {
    border-bottom: 1px solid #c2e7ff;
    padding: 0 10px;
    height: 100px;
  }
  .info {
    width: 100%;
  }

  .info table {
    padding: 5px 0;
    height: 100%;
    width: 100%;
  }

  .image img {
    flex: 2;
    padding: 10px;
    width: 100px;
    height: 100%;
    border-radius: 10px;
    /*overflow: hidden;*/
  }

  .logo img {
    margin-top: 20px;
  }

  .text,.price{
    text-align: right;
    vertical-align: bottom;
  }
  .price{
    font-size: 20px;
    font-weight: bold;
    color: red;
  }

</style>

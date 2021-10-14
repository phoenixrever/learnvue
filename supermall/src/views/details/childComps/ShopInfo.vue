<template>
  <div class="shop-info">
    <div class="name">
      <span class="logo"><img :src="logo"/></span>
      <span class="title">{{title}}</span>
    </div>
    <table class="table">
      <tr>
        <td><p>5.8万</p>
          <p>总销量</p></td>
        <td><p>99</p>
          <p>全部宝贝</p></td>
        <td class="second"></td>
        <td><p>描述相符</p>
          <p>价格合理</p>
          <p>质量满意</p></td>
        <td><p><span>4.6</span> <span :style="{backgroundColor: 'green'}">低</span></p>
          <p><span>5.0</span> <span :style="{backgroundColor: 'pink'}">低</span></p>
          <p><span>4.6</span> <span :style="{backgroundColor: 'green'}">低</span></p></td>
      </tr>
    </table>
    <div class="button">
      <div>
        进店逛逛
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props: {
      title: String,
      logo: String,
    },
    created() {

    }
  }
</script>

<style scoped>
  .shop-info {
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    justify-content: space-around;
  }

  .name {
    display: flex;
    margin-bottom: 20px;
  }

  .logo {
    flex: 1;
  }

  .title {
    flex: 10;
  }

  .table {
    width: 100%;
    margin: auto;
    text-align: center;
  }

  .table p:not(:last-child) {
    margin-bottom: 10px;
  }

  .table  p span:last-child{
    width:20px;
    color: white;
  }


  .second:after {
    content: '';
    width: 3px;
    height: 35px;
    border-radius: 10px;
    display: inline-block;
    background-color: #ff37ba;
  }
  .button{
    display: flex;
    justify-content: center;
  }
  .button div{
    margin-top: 20px;
    /*border: 1px solid #f42cff;*/
    border-radius: 5px;
    background: brown;
    padding: 3px;
    width: 100px;
    text-align: center;
    color: white;
    font-size: 15px;
  }
</style>

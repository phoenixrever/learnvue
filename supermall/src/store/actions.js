export default  {
  addCart(context, payload) {
    //防止延迟点击无效,多个点击只有1次有效
    if(context.state.dataSend === false){
      return
    }
    context.state.dataSend=false;
    return new Promise((resolve,reject)=>{
      // find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
      //模拟axios请求数据 永远不要在mutation里面写axios
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let product =context.state.cartList.find(item => item.id === payload.id);
          resolve(product);
        },10)
      }).then(product=>{
        if (product) {
          setTimeout(()=>{
            context.commit('addCount',product)
            resolve("当前商品数量+1")
            context.state.dataSend=true;
          },10);
        } else {
          payload.count=1
          setTimeout(()=>{
            context.commit('addCartId',payload)
            resolve("添加商品成功")
            context.state.dataSend=true;
          },10);
        }
      })
    })
  }
}

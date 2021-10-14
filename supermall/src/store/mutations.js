export default {
  addCartId(state, payload) {
    payload.checked = true;
    state.cartList.push(payload)
  },
  addCount(state, payload) {
    payload.count++
  }  ,
  checked(state, id) {
    let product =state.cartList.find(item => item.id ===id);
    product.checked=!product.checked
  }
}

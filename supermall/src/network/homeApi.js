import {request} from "network/request"

export default {
  getHomeMultiData() {
    return request({
      url: "/home/multidata"
    })
  },
  getHomeGoods(){
    return request({
      url: "http://localhost:8080/goods.json"
    })
  }
}

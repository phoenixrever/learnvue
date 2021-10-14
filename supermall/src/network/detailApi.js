import {request} from "network/request"

export function getDetail(id) {
    return request({
      url: `http://localhost:8080/highheels.json`
    })

}
export function getDetailsImages(){
    return request({
      url: "http://localhost:8080/itemImages.json"
    })
}


//有时候返回的数据杂乱无章 我们需要这个页面需要的数据重新提取封装到一个对象
export class ItemInfo {
  constructor(data){
    this.desc=data.desc;
    this.id=data.id;
    this.price=data.price;
    this.oldPrice=data.oldPrice;
    this.sellInfo=data.sellInfo;
    this.logo=data.logo;
    this.title=data.title;
    this.itemParamImg=data.itemParamImg;
    this.images=data.images;
    this.comment=data.comment;
  }
}

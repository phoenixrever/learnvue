import Toast from './Toast'

export default  {
  install(Vue){
    console.log("执行toastinstall 函数 类似构造方法");
    //创建组件类构造器
    const ToastConstructor=Vue.extend(Toast);
    //根据类构造器创建组件对象
    //mount里面是toast替换的对象留空 只是添加 不替换任何对象
    const toast = new ToastConstructor().$mount();
    // 挂载到body
    document.body.appendChild(toast.$el);

    Vue.prototype.$toast=toast
  }
}

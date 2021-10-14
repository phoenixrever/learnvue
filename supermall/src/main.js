import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"
import img from 'assets/img/common/placeholder.png'
Vue.config.productionTip = false

Vue.prototype.$bus=new Vue(); //总线 vue实例才能发射事件

Vue.use(toast);  //执行toastinstall 函数 类似构造方法
//解决移动端300ms延迟
FastClick.attach(document.body);

Vue.use(VueLazyLoad,{
  loading:img
});
// // 接收事件组件
// this.$bus.$on('foo',()=>{
//   console.log(" 监听到事件")
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

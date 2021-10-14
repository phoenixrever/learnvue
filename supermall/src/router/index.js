import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import ('views/home/Home.vue');
const Category = ()=>import ('views/category/category.vue');
const Profile = ()=>import ('views/profile/Profile.vue');
const shoppingCart = ()=>import ('views/shopping-cart/ShoppingCart.vue');
const ItemDetail = ()=>import ('views/details/ItemDetail.vue');

const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'ItemDetail',
    component: ItemDetail
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: shoppingCart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router

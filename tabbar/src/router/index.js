import { createRouter, createWebHistory } from 'vue-router'

const Home = ()=>import ('@/views/home/Home.vue');
const Classify = ()=>import ('@/views/category/category.vue');
const Profile = ()=>import ('@/views/profile/Profile.vue');
const shoppingCart = ()=>import ('@/views/shopping-cart/ShoppingCart.vue');
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
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/category',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: shoppingCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

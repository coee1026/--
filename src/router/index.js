import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Myorder from '@/views/myorder/index.vue'
import Pay from '@/views/pay/index.vue'
import Product from '@/views/product/index.vue'
import Search from '@/views/search/index.vue'
import SearchList from '@/views/search/list.vue'

import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/category', component: Category },
      { path: '/cart', component: Cart },
      { path: '/user', component: User }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/myorder',
    component: Myorder
  },
  {
    path: '/pay',
    component: Pay
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/searchlist',
    component: SearchList
  }
]

const router = new VueRouter({
  routes
})

const preventRouter = ['/pay', '/myorder']
router.beforeEach(async (to, from, next) => {
  console.log(from)
  console.log('======')
  console.log(to)
  console.log(to.path)

  if (preventRouter.includes(to.path) &&
    !store.state.user.userinfo.token &&
    to.path !== '/login') {
    console.log(111)
    // return '/login'
    next('/login')
  } else {
    next()
  }
})

export default router

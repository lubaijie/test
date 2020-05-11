import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  // 订单
  {
    path: '/',
    name: 'Order',
    component: () => import('@/views/order/index')
  },
  // 收货地址列表
  {
    path: '/selectadd',
    name: 'SelectAddress',
    component: () => import('@/views/selectadd/index')
  },
  // 新增收货地址
  {
    path: '/addaddress',
    name: 'AddAddress',
    component: () => import('@/views/addaddress/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

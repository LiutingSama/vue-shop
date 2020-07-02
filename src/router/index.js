import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Categories from '../components/goods/Categories.vue'
import Goods from '../components/goods/Goods.vue'
import Orders from '../components/order/Orders.vue'
import Params from '../components/goods/Params.vue'
import Reports from '../components/Reports.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Add from '../components/goods/AddGoods.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home', component: Home, redirect: '/welcome', children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/categories', component: Categories },
      { path: '/goods', component: Goods },
      { path: '/orders', component: Orders },
      { path: '/params', component: Params },
      { path: '/reports', component: Reports },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/goods/add', component: Add }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 为路由对象添加 beforeEach 导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 从哪个路径跳转而来
  // next 是一个函数，表示放行
  // 两种方法：1、next() 放行 2、next('/login) 强制跳转
  // 从 sessionstorage 中获取到保存的 token 值
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果用户直接访问登录页，若存在token，则跳转到home
  if (to.path === '/login') {
    if (tokenStr) return next('home')
    next()
  }
  if (to.path === '/welcome') {
    window.sessionStorage.removeItem('activePath')
    next()
  }
  // 没有token，强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router

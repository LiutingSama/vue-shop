import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home }
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
  // 没有token，强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router

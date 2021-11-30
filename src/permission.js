import router from './router'
import store from '@/store'

// 白名单
const whiteList = ['/login']

/**
 * 路由前置守卫
 * to 到哪里去
 * from 从哪里来
 * 是否要去
 */
router.beforeEach((to, from, next) => {
  // 用户未登录，只允许进入login
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 用户已登录，不允许进入login
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
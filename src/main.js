// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios

// 拦截器,使axios返回的数据中只含data
axios.interceptors.response.use(res => {
  return res.data
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('loginInfo')) { // 判断当前用户的登录信息loginInfo是否存在
      next()
    } else {
      next({
        path: '/Login'
      })
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

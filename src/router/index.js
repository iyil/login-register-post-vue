import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Parent from '@/components/sendMessage/Parent'
import Slot from '@/components/slot/Parent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {requireLogin: true},
      children: [
        {
          path: 'sendMessage',
          name: 'sendMessage',
          component: Parent
        },
        {
          path: 'slot',
          name: 'slot',
          component: Slot
        }
      ]
    }
  ]
})

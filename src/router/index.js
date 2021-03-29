import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import login from '@/components/login'
import roullete from '@/components/roullete'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Roullete',
      component: roullete
    },
    {
      path: '/test/:id/:test/:d',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'login',
      component: login,

      meta: { title: 'Dashboard' }
    },
    {
      path: '/register',
      name: 'register',
      component: register,

      meta: { title: 'Register' }
    },
  ]
})

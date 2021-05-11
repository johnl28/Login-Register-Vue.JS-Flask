import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import login from '@/components/login'
import home from '@/components/home'
import register from '@/components/register'
import profile from '@/components/profile'
import watch from '@/components/watch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: home,
      meta: { title: 'Home' }
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: profile,
      meta: { title: 'Profile' }
    },
    {
      path: '/login',
      name: 'login',
      component: login,

      meta: { title: 'Login' }
    },
    {
      path: '/register',
      name: 'register',
      component: register,

      meta: { title: 'Register' }
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch,

      meta: { title: 'Watch' }
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',  
      component: () => import(/* webpackChunkName: "about" */ './components/Menu.vue')
    },
    {
      path: '/admin',
      name: 'admin',  
      component: () => import( './components/Admin.vue')
    },
    {
      path: '/about',
      name: 'about',  
      component: () => import('./components/About.vue')
    },
    {
      path: '/login',
      name: 'login',  
      component: () => import('./components/Login.vue')
    },
    {
      path: '/register',
      name: 'register',  
      component: () => import( './components/Register.vue')
    },
  ]
})

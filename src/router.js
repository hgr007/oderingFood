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
      component: () => import('./components/Menu.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./components/Admin.vue')
    },
    {
      path: '/about',
      name: 'about',
      redirect: '/Contact',
      component: () => import('./components/About.vue'), children: [
        {
          path: '/Contact',
          name: 'contact',
          redirect: '/phone',
          component: () => import('./components/about/Contact.vue'), children: [
            {
              path: '/phone',
              name: 'phone',
              component: () => import('./components/about/msg/phone.vue')
            },
            {
              path: '/userName',
              name: 'userName',
              component: () => import('./components/about/msg/userName.vue')
            },
          ]
        },
        {
          path: '/Delivery',
          name: 'delivery',
          component: () => import('./components/about/Delivery.vue')
        },
        {
          path: '/History',
          name: 'history',
          component: () => import('./components/about/History.vue')
        },
        {
          path: '/OderingGuide',
          name: 'oderingGuide',
          component: () => import('./components/about/OderingGuide.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/Register.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

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
      component: () => import( './components/Admin.vue')
    },
    {
      path: '/about',
      name: 'about',  
      component: () => import('./components/About.vue'),children:[
        {
          path:'./components/about/Contact.vue',
          name:'contact',
          component:() =>import('./components/about/Contact.vue')
        },
        {
          path:'./components/about/Delivery.vue',
          name:'delivery',
          component:() =>import('./components/about/Delivery.vue')
        },
        {
          path:'./components/about/History.vue',
          name:'history',
          component:() =>import('./components/about/History.vue')
        },
        {
          path:'./components/about/OderingGuide.vue',
          name:'oderingGuide',
          component:() =>import('./components/about/OderingGuide.vue')
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
      component: () => import( './components/Register.vue')
    },
  ]
})

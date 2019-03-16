import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OderingGuide from './components/about/OderingGuide'


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
         default:Home,
         'history':History,
         'delivery':Delivery,
         'oderingGuide':OderingGuide

        }
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
    // 二级路由
    {
      path: '/about',
      name: 'about',
      redirect: '/Contact',//默认显示联系我们
      component: () => import('./components/About.vue'), children: [
        {
          //三级路由  
          path: '/Contact',
          name: 'contact',
          redirect: '/phone',//默认显示电话
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
    //在地址错误的情况下跳转到/也就是home
    {
      path: '*',
      redirect: '/'
    }
  ]
})
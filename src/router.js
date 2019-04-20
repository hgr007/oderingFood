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
      components: {
        default: Home,
        'history': History,
        'delivery': Delivery,
        'oderingGuide': OderingGuide

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
      component: () => import('./components/Admin.vue'),
      beforeEnter: (to, from, next) => {
        // ...路由独享守卫 在进入之前提示
        alert("你丫的不是管理员 无法访问此页面")
        next(false);

        
        // 判断store.gettes.isLogin === false


        // if (to.path == '/login' || to.path == '/register') {
        //   next();
        // }
        // else {
        //   alert("请登录")
        //   next('/login')
        // }

      }
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
          redirect: '/userName',//默认显示店主
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
  ],
  scrollBehavior(to, from, savedPosition) {
    // ...
    // return {x:0,y:100}  //显示的位置
    // return {selector:'.btn'}  //当位置够的时候 显示第一个按钮的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
})
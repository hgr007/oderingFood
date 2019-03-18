import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL =' https://wd5254752724ripdnh.wilddogio.com/'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



//全局守卫  跳转
// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   if (to.path == '/login' || to.path == '/register') {
//     next();
//   }
//   else {
//     alert("请登录")
//   }

// })

//后置钩子
// router.afterEach((to, from) => {
//   alert("后置钩子");
// })


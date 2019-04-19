import Vue from 'vue'
import Vuex from 'vuex'
import currentUser from "./modules/currentUser";
import menuItems from "./modules/menuItems";
import status from "./modules/status";


Vue.use(Vuex)

export default new Vuex.Store({
  //应用属性的状态
  modules: {
    currentUser,
    menuItems,
    status
  }
})

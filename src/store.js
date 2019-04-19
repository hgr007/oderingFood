import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //设置属性
    menuItems: {},
    currentUser: null,
    isLogin: false
  },
  getters: {
    //获取属性的状态
    getMenuItems: state => state.menuItems,
    currentUser:state => state.currentUser,
    isLogin:state => state.isLogin
  },
  mutations: {
    //改变属性的状态
    //将数据存到vuex里面
    setMenuItems(state, data) {
      state.menuItems = data;
    },

    //移除掉管理页面的 选项
    removeMenuItems(state, data) {
      state.menuItems.forEach((item, index) => {
        if (item === data) {
          state.menuItems.splice(index, 1)
        }
      });
    },
    // 添加到管理页面
    pushToMenuItems(state, data) {
      state.menuItems.push(data);
    },
    
    userStatus(state, user) {
      //更改用户的状态信息
      if (user) {
        state.currentUser = user;
        state.isLogin = true;
      }
      else {
        state.currentUser = null;
        state.isLogin = false;
      }
    }
  },
  actions: {
    //应用属性的状态
    setUser({ commit }, user) {
      commit("userStatus", user)
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //设置属性
    menuItems: {}
  },
  getters: {
    //获取属性的状态
  },
  mutations: {
    //改变属性的状态

    //将数据存到vuex里面
    setMenuItems(state, data) {
      state.menuItems = data;
    },

    removeMenuItems(state, data) {
      state.menuItems.forEach((item, index) => {
        if (item === data) {
          state.menuItems.splice(index, 1)
        }
      });
    },


    pushToMenuItems(state, data) {
      state.menuItems.push(data);
      
      
    }
  },
  actions: {
    //应用属性的状态
  }
})

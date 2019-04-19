const state = {
    isLogin: false
}
const getters = {
    isLogin: state => state.isLogin
}
const mutations = {
  loginStatus(state, status){
      state.isLogin = status
    }
}
const actions = {
    setUser({ commit }, status) {
        commit("loginStatus", status)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
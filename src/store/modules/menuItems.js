const state = {
    //设置属性   使用modules 要根据属性来创建文件
    menuItems: {}
}
const getters = {
    getMenuItems: state => state.menuItems
}
const mutations = {
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
    }

}
const actions = {

}



export default {
    state,
    getters,
    actions,
    mutations
}
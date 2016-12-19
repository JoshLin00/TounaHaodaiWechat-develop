/**
 * 公共的一些状态，包括是否显示顶部navbar以及底部tabbar
 */
import * as types from '../mutation-types.js';

const state = {
  showNavbar: false,  // 默认不显示顶部navbar
  showBackBtn: false,  // 默认显示返回按钮
  title: null,        // 页面标题
  showTabbar: false,   // 默认显示底部tabbar
}

const getters = {
  commonConfig: state => state, // 返回state中所有的状态
}

const actions = {
  setCommonConfig({commit},settings) { // 修改state中的状态
    commit(types.COMMON_CONFIG, settings);
  }
}

const mutations = {
  [types.COMMON_CONFIG](state, settings) {  // 修改state中的状态
    state = Object.assign(state, settings)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

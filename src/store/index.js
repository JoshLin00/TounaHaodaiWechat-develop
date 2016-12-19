/**
 * 创建store模拟数据
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '../plugins/logger';
import common from './modules/common';
import login from './modules/login';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    common,
    login,
  },
  strict: debug, //是否开启严格模式
  plugins: debug ? [createLogger()] : [],
});

export default store;

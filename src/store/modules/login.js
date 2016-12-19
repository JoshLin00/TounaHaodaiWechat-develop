/**
 * 登录页状态
 */
import * as types from '../mutation-types.js';
import Vue from 'vue';
import { Indicator, Toast } from 'mint-ui';
import ApiService from '../../api/api';
import localStorage from '../../localStorage.js';

const state = {
  isVc: false,  // 是否需要输入图形验证码
  isLogin: false, // 是否登录成功
  userinfo: {  // 用户信息
    name: null, // 名字
    phone: null,  // 手机号
    realstatus: false,  // 是否已经认证
  },
}

const getters = {
  isVc: state => state.isVc,
  isLogin: state => state.isLogin,
  userinfo: state => state.userinfo,
}

const actions = {
  /**
   * 用户登录
   * @param  {[type]} options.commit [description]
   * @param  {[type]} username       [用户名]
   * @param  {[type]} password       [密码]
   * @param  {[type]} picCode        [图形验证码]
   * @return {[type]}                [description]
   */
  login: ({commit}, options) => {
    console.log('username=' + options.username + '   md5Pwd=' + options.md5Pwd + '   validCode=' + options.validCode);
    Indicator.open();
    ApiService.login(options, (data) => {
      if(data.status === 200) { // 状态是200登录成功
        Indicator.close();
        commit(types.LOGIN_SUCCESS);
        Toast({message: '登录成功'});
        ApiService.userinfo((data) => { // 登录成功之后去获取用户信息
          console.log(data);
          if(data.status === 200) {
            commit(types.USERINFO, data.result);
            localStorage.setUserinfo(data.result);  // 保存用户信息到localStorage中
          }
        })
      } else if(data.status === 500) {  // 状态是500登录失败
        Indicator.close();
        if(data.result.isVc) {  // 登录需要输入图形验证码
          commit(types.LOGIN_NEED_PIC_CODE);
        }
        Toast({message: data.desc});
      }
    });
    // ApiService.login(options.username, options.md5Pwd, options.validCode).then((data) => {
    //   console.log('data=');
    //   console.log(data);
    // });
  }
}

const mutations = {
  [types.LOGIN_SUCCESS](state) {  // 登录成功
    state.isLogin = true;
  },
  [types.LOGIN_NEED_PIC_CODE](state) {  // 登录需要输入图形验证码
    state.isVc = true;
  },
  [types.USERINFO](state, payload) {
    state.userinfo = Object.assign(state.userinfo, payload);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

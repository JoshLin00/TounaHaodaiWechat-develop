import Vue from 'vue';
import VueResource from 'vue-resource';
import Query from 'querystring';
import data from '../testData/data';
import { HD_API_HOST } from '../config.js';
Vue.use(VueResource);

const ApiService = {
  // 用户登录
  login: (options, cb) => {
    console.log('options=');
    console.log(options);
    Vue.http.post('/login').then(
      (response) => response.json()
    ).then(
      (data) => setTimeout(() => { cb(data) }, 1000)
    );
  },
  // login: (username, md5Pwd, validCode='') => {
  //   console.log('options=' + username + ' ' + md5Pwd + '  ' + validCode);
  //   return Vue.http.get(HD_API_HOST + 'common.do?' + Query.stringify({
  //     'method': 'login',
  //     'subtime': new Date().getTime(),
  //     username,
  //     md5Pwd,
  //     validCode
  //   }));
  // },
  // 用户信息
  userinfo: (cb) => {
    Vue.http.get('/userinfo').then(
      (response) => JSON.parse(response.body)
    ).then(
      (data) => setTimeout(() => { cb(data) }, 1000)
    );
  }
};

export default ApiService;

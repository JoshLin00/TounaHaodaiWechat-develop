/**
 * 存储userinfo，包括设置和获取
 */
const USERINFO = 'userinfo';
export default {
  setUserinfo(userinfo) {
    window.localStorage.setItem(USERINFO, JSON.stringify(userinfo));
  },
  getUserinfo() {
    let userinfo = JSON.parse(window.localStorage.getItem(USERINFO));
    return userinfo ? userinfo : [];
  },
};

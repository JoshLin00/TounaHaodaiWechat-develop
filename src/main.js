import Vue from 'vue';
import '../src/assets/css/reset.css'; // 重置样式表
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import router from './router/router';
import store from './store/index';

Vue.use(MintUI);

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  store,
}).$mount('#app');

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App),
// });

// 现在，应用已经启动了！

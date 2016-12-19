import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App';
import Index from '../views/Index';   //首页
import Guide from '../views/Guide';   //指南页
import Member from '../views/Member';   //账户主页
import Login from '../views/Login';   //登录页
import Register from '../views/Register';   //注册页
import Personal from '../views/Personal';   //  账户主页/个人资料
import BaseInfo from '../views/BaseInfo';   //  我的/个人资料/基本资料
import CarInfo from '../views/CarInfo';   //  我的/个人资料/基本资料
import BrandIntr from '../views/BrandIntr';   //  账户主页/品牌介绍
import ContactsInfo from '../views/ContactsInfo.vue'; //  账户主页／个人资料／联系人 


Vue.use(VueRouter);

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// import App from './App';
// import Login from './views/Login';

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: App,
    children: [
      { path: '/index', name: 'index', component: Index},
      { path: '/guide', name: 'guide', component: Guide},
      { path: '/member', name: 'member', component: Member},
      { path: '/member/login', name: 'login', component: Login},
      { path: '/member/login/register', name: 'register', component: Register},
      { path: '/member/personal', name: 'personal', component: Personal},
      { path: '/member/personal/baseInfo', name: 'baseInfo', component: BaseInfo},
      { path: '/member/personal/carInfo', name: 'carInfo', component: CarInfo},
      { path: '/member/personal/contactsInfo', name: 'contactsInfo', component: ContactsInfo},
      { path: '/member/brandIntr', name: 'brandIntr', component: BrandIntr},
    ]
  },

];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  // mode:'history', //这样url就没有/#/XXX,而是常见的url形式
  // linkActiveClass:'active',     //router-link的选中状态的class，也有一个默认的值
  history:true
});

// 4. 导出router
export default router;


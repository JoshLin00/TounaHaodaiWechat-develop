import Mock from 'mockjs';

export default Mock.mock(
  '/login',
  {
    // 'status': 200,
    'status': 500,
    'desc': '用户名或密码错误',
    'result': {
      'isVc': true,
    }
  }
).mock(
  '/userinfo',
  {
    'status': 200,
    'result': {
      'name': '@name',
      'age|1-100': 100,
      'realstatus|1': true,
      'phone': '13145223424',
    },
  }
).mock(
  '/books',
  {

  }
);



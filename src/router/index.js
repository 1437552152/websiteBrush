import Vue from 'vue'
import Router from 'vue-router'
Vue.use(require('vue-wechat-title'))
const Register = resolve => require(['@/view/register'], resolve) // 注册
const Home = resolve => require(['@/view/home'], resolve) // 首页

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'register',
    component: Register,
    children: [{
      path: 'signin ',
      name: 'Register',
      component: Register,
      meta: {
        title: '首页'
      }
    }],
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]
})

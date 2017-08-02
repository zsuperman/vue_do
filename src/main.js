import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import axios from 'axios'

Vue.use(VueRouter)

Vue.prototype.$http = axios   //把axios  对象挂到vue原型上 暴露

const router=new VueRouter({
	mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes:routerConfig
})

require('./assets/css/base.css')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

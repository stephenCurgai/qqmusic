// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入公共的js和css文件
import './assets/css/reset.css'
import './assets/js/remScale'

// 引入axios并挂载到原型链上
import axios from 'axios'
Vue.prototype.$http = axios

// 引入api接口
import api from './Interface/api'
Vue.prototype.$api = api


// Vue.propor

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

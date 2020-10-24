// 引入bootstrap.css样式
import 'bootstrap/dist/css/bootstrap.css'
// 引用全局的样式文件
import '@/assets/css/index.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import axios from 'axios'

// // 全局配置URL前导路径
// axios.defaults.baseURL = 'http://localhost:3000'

// Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

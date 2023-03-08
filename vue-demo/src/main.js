import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import servies from './servies.js'
import router from './router/index.js'
import  Echarts from "echarts"
Vue.prototype.$echarts = Echarts

// 挂载到原型，可以在全局使用
Vue.prototype.servies=servies
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

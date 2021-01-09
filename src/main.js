import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jquery from 'jquery'
import bootstrap from 'bootstrap'
Vue.config.productionTip = false
Vue.use(VueAxios,axios,bootstrap,jquery)

//  定义长度为10的过滤器
Vue.filter('length10',(e) =>{
  return e.slice(0,10) + '...'
})
//  定义转大小写的过滤器
Vue.filter('toUpperCase',(e)=>{
  return  e.toUpperCase()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

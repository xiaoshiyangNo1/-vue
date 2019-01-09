// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ppp from './router/index'

import aaa from './App.vue'






import VueResource from 'vue-resource'
Vue.use(VueResource)

// Vue.config.productionTip = false

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'   

// //配置根域名
// Vue.http.options.root = 'http://www.lovegf.cn:8899/api/getnewslist/'

// // //配置默认的post提交数据类型为传统表单
// Vue.http.options.emulateJSON = true



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:ppp,
 
  // components: { App },

  render: c => c(aaa)

  
})

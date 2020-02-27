import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/nuiitofont.css'
import './assets/css/ready.css'
import './assets/css/demo.css'

import 'jquery'
import 'popper.js'
import 'bootstrap'


import Layout from './components/layout/Layout'



Vue.config.productionTip = false

Vue.prototype.$goRoute=function(index){
  this.$router.push(index)
}

new Vue({
  render: h => h(Layout)
}).$mount('#app')

import Vue from 'vue'
import App from './App'
/*等价于 var App = requier('./App')*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

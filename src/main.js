import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/state'

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

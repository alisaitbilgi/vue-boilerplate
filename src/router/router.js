import Vue from 'vue'
import Router from 'vue-router'
import FirstTab from '../components/FirstTab.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/first-tab',
      name: 'FirstTab',
      component: FirstTab
    },
    {
      path: '/',
      redirect: '/first-tab'
    }
  ]
})

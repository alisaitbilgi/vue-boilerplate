import Vue from 'vue'
import Router from 'vue-router'
import FirstTab from '../components/FirstTab.vue'
import SecondTab from '../components/SecondTab.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/first-tab',
      name: 'FirstTab',
      component: FirstTab
    },
    {
      path: '/second-tab',
      name: 'SecondTab',
      component: SecondTab
    },
    {
      path: '/',
      redirect: '/first-tab'
    }
  ]
})

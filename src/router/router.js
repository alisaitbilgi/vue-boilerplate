import Vue from 'vue'
import Router from 'vue-router'
import FirstTab from '../components/FirstTab.vue'
import SecondTab from '../components/SecondTab.vue'
import ThirdTab from '../components/ThirdTab.vue'
import FourthTab from '../components/FourthTab.vue'

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
    }, {
      path: '/third-tab',
      name: 'ThirdTab',
      component: ThirdTab
    }, {
      path: '/fourth-tab',
      name: 'FourthTab',
      component: FourthTab
    },
    {
      path: '/',
      redirect: '/first-tab'
    }
  ]
})

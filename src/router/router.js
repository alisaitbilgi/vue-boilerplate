import Vue from 'vue'
import Router from 'vue-router'
import FirstTab from '../components/containers/body/content/firstTab/FirstTab.vue'
import SecondTab from '../components/containers/body/content/secondTab/SecondTab.vue'
import ThirdTab from '../components/containers/body/content/thirdTab/ThirdTab.vue'
import FourthTab from '../components/containers/body/content/fourthTab/FourthTab.vue'

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

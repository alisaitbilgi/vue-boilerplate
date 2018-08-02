import ContentView from './content/ContentView.vue'
import Sidebar from './sidebar/Sidebar.vue'

export default function controller () {
  return {
    name: 'AppBody',
    components: {
      Sidebar,
      ContentView
    },
    computed: {
      dashboardItems: function () {
        return [
          {tabName: 'First Tab', routerLink: 'first-tab'},
          {tabName: 'Second Tab', routerLink: 'second-tab'},
          {tabName: 'Third Tab', routerLink: 'third-tab'},
          {tabName: 'Fourth Tab', routerLink: 'fourth-tab'}
        ]
      }
    }
  }
}

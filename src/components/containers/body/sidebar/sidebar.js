
export default function controller () {
  return {
    name: 'Sidebar',
    data () {
      return {
        dashboardItems: [
          {tabName: 'First Tab', routerLink: 'first-tab'},
          {tabName: 'Second Tab', routerLink: 'second-tab'},
          {tabName: 'Third Tab', routerLink: 'third-tab'},
          {tabName: 'Fourth Tab', routerLink: 'fourth-tab'}
        ]
      }
    }
  }
}

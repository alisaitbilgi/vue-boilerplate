
export default function init () {
  return {
    name: 'Sidebar',
    data () {
      return {
        dashboardItems: [
          {tabName: 'First Tab', routerLink: 'first-tab'},
          {tabName: 'Second Tab', routerLink: 'second-tab'}
        ]
      }
    }
  }
}

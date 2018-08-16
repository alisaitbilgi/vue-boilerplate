<template>
  <div class="application-body">
    <v-alert
      :value="alertManager.visible"
      :type="alertManager.type"
    >
      {{alertManager.text}}
    </v-alert>
    <AppSidebar v-bind:dashboard-items="dashboardItems"/>
    <ContentView />
  </div>
</template>

<script>
import ContentView from './ContentView.vue'
import AppSidebar from './AppSidebar.vue'
import $store from '../store/index.js'

export default {
  name: 'AppBody',
  components: {
    AppSidebar,
    ContentView
  },
  computed: {
    dashboardItems: function () {
      return [
        {tabName: 'Fun Todos', routerLink: 'first-tab'},
        {tabName: 'Work Todos', routerLink: 'second-tab'}
      ]
    },
    alertManager: function () {
      return $store.state.alertManager
    }
  }
}

</script>

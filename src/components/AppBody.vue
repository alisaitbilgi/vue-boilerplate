<template>
  <div class="application-body">
    <v-alert
      :value="alertManager.visible"
      :type="alertManager.type"
    >
      {{alertManager.text}}
    </v-alert>
    <Sidebar v-bind:dashboard-items="dashboardItems"/>
    <ContentView />
  </div>
</template>

<script>
import ContentView from './ContentView.vue'
import Sidebar from './Sidebar.vue'
import $store from '../store/index.js'

export default {
  name: 'AppBody',
  components: {
    Sidebar,
    ContentView
  },
  computed: {
    dashboardItems: function () {
      return [
        {tabName: 'First Tab', routerLink: 'first-tab'}
      ]
    },
    alertManager: function () {
      return $store.state.alertManager
    }
  }
}

</script>

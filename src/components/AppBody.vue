<template>
  <div class="application-body">
    <Sidebar v-bind:dashboard-items="dashboardItems"/>
    <ContentView />
  </div>
</template>

<script>
import ContentView from './ContentView.vue'
import Sidebar from './Sidebar.vue'

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
    }
  }
}

</script>

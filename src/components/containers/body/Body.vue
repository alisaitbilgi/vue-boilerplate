<template>
  <div class="application-body">
    <Sidebar v-bind:dashboard-items="dashboardItems"/>
    <ContentView />
  </div>
</template>

<script>
import controller from './body.js'

export default controller()
</script>

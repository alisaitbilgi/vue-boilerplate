<template>
  <div class="application-body">
    <Sidebar />
    <ContentView />
  </div>
</template>

<script>
import ContentView from './content/ContentView.vue'
import Sidebar from './sidebar/Sidebar.vue'

export default {
  name: 'AppBody',
  components: {
    Sidebar,
    ContentView
  }
}
</script>

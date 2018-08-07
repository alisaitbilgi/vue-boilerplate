<template>
<div class="application-footer">
  Linovi Vue Footer
</div>
</template>

<script>
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)

export default {
  data: function () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>

<style lang="scss" scoped>
  .application-footer {
    .footer-card {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    .navbar-router-link {
      text-decoration: none;
      width: 150px;
    }
  }
</style>

<template>
<div class="application-footer">
  <v-card flat class="footer-card">
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
    <router-link :to="{name: 'FirstTab'}" class="navbar-router-link">
      <v-btn
        color="teal"
        flat
        value="FirstTab"
      >
        <span>First Tab</span>
        <v-icon>history</v-icon>
      </v-btn>
    </router-link>

    <router-link :to="{name: 'SecondTab'}" class="navbar-router-link">
      <v-btn
        color="teal"
        flat
        value="SecondTab"
      >
        <span>Second Tab</span>
        <v-icon>favorite</v-icon>
      </v-btn>
    </router-link>
    <router-link :to="{name: 'ThirdTab'}" class="navbar-router-link">
      <v-btn
        color="teal"
        flat
        value="ThirdTab"
      >
        <span>Third Tab</span>
        <v-icon>place</v-icon>
      </v-btn>
    </router-link>
    <router-link :to="{name: 'FourthTab'}" class="navbar-router-link">
      <v-btn
        color="teal"
        flat
        value="FourthTab"
      >
        <span>Fourth Tab</span>
        <v-icon>home</v-icon>
      </v-btn>
    </router-link>
    </v-bottom-nav>
  </v-card>
</div>
</template>

<script>
import './footer.scss'
import footer from './footer.js'

export default footer()
</script>

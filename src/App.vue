<template>
  <div id="app">
    <Navbar navbar-title="Linovi Vue Project">
      <img class="navbar-logo" src="./assets/logo.png" />
    </Navbar>
    <Body />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/containers/navbar/Navbar.vue'
import Body from './components/containers/body/Body.vue'
import Footer from './components/containers/footer/Footer.vue'
import './app.scss'

export default {
  name: 'App',
  components: {
    Navbar,
    Body,
    Footer
  }
}
</script>

<template>
  <div id="app">
    <Navbar />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Body from './components/body/Body.vue'
import Footer from './components/footer/Footer.vue'
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

<template>
  <div id="app">
    <AppNavbar navbar-title="Linovi Vue Project">
      <img class="navbar-logo" src="./assets/logo.png" />
    </AppNavbar>
    <AppBody />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppBody from './components/AppBody.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppBody,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: initial;

    #app {
      display: flex;
      flex-direction: column;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      width: 100%;
      height: 100%;
      min-height: 100vh;

      .application-navbar {
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        position: absolute;
        top: 0;
        opacity: 0.97;
        background: #ffffff;
      }

      .application-body {
        display: flex;
        position: absolute;
        top: 60px;
        bottom: 80px;
        width: 100%;
        height: calc(100% - 120px);
      }

      .application-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        background: #242424;
      }
    }
  }
</style>

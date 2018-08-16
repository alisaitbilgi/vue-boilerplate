<template>
  <div class="application-navbar">
    <div class="logo-container">
      <slot></slot>
    </div>
    <div class="header-container">
      <div class="each-tab-wrapper" v-bind:key="eachTab.tabName" v-for="eachTab in dashboardItems">
        <MenuItem v-bind:tab-menu-name="eachTab.tabName" v-bind:router-link="eachTab.routerLink"/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  name: 'Navbar',
  components: {
    MenuItem
  },
  props: {
    navbarTitle: {
      type: String
    },
    dashboardItems: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
  .application-navbar {
    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180px;
      min-width: 180px;

      .navbar-logo {
        width: 50px;
        height: 50px;
      }
    }
    .header-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(100% - 180px);
      height: 100%;

      .each-tab-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        .each-tab {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000;
          width: 150px;
          height: 100%;
          padding: 0;
        }
      }
    }
  }
</style>

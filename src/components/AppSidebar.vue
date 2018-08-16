<template>
  <div class="sidebar-container">
    <div class="each-tab-wrapper" v-bind:key="eachTab.tabName" v-for="eachTab in dashboardItems">
      <MenuItem v-bind:tab-menu-name="eachTab.tabName" v-bind:router-link="eachTab.routerLink"/>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  name: 'AppSidebar',
  props: {
    dashboardItems: Array
  },
  components: {
    MenuItem
  }
}
</script>

<style lang="scss" scoped>
  .sidebar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    min-width: 180px;
    background: #242424;
    padding-top: 150px;

    .each-tab-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      cursor: pointer;
      border: 0.2px solid #393939;
    }
  }
</style>

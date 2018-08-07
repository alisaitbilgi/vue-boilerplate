<template>
  <div class="sidebar-container">
    <div class="each-tab-wrapper" v-bind:key="eachTab.tabName" v-for="eachTab in dashboardItems">
      <router-link v-bind:id="eachTab.routerLink" :to="eachTab.routerLink" class="each-tab" exact>
        {{eachTab.tabName}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    dashboardItems: Array
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
    display:none;

    .each-tab-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      cursor: pointer;
      border: 0.2px solid #393939;

      .each-tab {
        display: flex;
        align-items: center;
        padding-left: 30px;
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        width: 100%;
        height: 100%;
        text-align: left;
      }
      &:hover {
        background: #393939;
      }
    }
  }
</style>

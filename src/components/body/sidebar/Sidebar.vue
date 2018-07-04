<template>
  <div class="sidebar-container">
    <div class="each-tab-wrapper" v-bind:key="eachTab.tabName" v-for="eachTab in dashboardItems">
      <router-link :to="eachTab.routerLink" class="each-tab" exact>
        {{eachTab.tabName}}
      </router-link>
    </div>
  </div>
</template>

<script>
import init from './sidebar.js'
import './sidebar.scss'

export default init()
</script>

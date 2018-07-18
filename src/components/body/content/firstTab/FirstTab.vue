<template>
  <div class="first-tab-container">
    <GitBadge />
    <div class="search-container">
      <input v-on:change="setUserInput" class="search-user"/>
    </div>
  </div>
</template>

<script>
import './firstTab.scss'
import controller from './firstTab.js'

export default controller()
</script>

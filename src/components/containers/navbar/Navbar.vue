<template>
  <div class="application-navbar">
    <div class="logo-container">
      <slot></slot>
    </div>
    <div class="header-container">
      <span ng-if="navbarTitle">{{navbarTitle}}</span>
    </div>
  </div>
</template>

<script>
import './navbar.scss'
import controller from './navbar.js'

export default controller()
</script>

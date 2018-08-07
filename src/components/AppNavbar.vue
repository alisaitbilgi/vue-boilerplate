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
export default {
  name: 'Navbar',
  props: ['navbarTitle']
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
      margin-left: -60px;
    }
  }
</style>

<template>
  <router-link v-bind:id="routerLink" :to="routerLink" class="each-tab" exact>
    {{tabMenuName}}
  </router-link>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {
    tabMenuName: {
      type: String
    },
    routerLink: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .each-tab-wrapper {
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
</style>

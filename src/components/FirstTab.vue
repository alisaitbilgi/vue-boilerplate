<template>
  <div class="first-tab-container">
    {{tabText}}
  </div>
</template>

<script>
export default {
  computed: {
    tabText: function () {
      return 'Hello First Tab'
    }
  }
}
</script>

<style lang="scss" scoped>
  .first-tab-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

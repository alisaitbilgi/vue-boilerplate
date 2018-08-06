<template>
  <div class="third-tab-container">
    {{tabText}}
  </div>
</template>

<script>
export default {
  computed: {
    tabText: function () {
      return 'Hello Third Tab'
    }
  }
}
</script>

<style lang="scss" scoped>
  .third-tab-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

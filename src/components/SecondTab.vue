<template>
  <div class="second-tab-container">
    {{tabText}}
  </div>
</template>

<script>
export default {
  computed: {
    tabText: function () {
      return 'Hello Second Tab'
    }
  }
}
</script>

<style lang="scss" scoped>
  .second-tab-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

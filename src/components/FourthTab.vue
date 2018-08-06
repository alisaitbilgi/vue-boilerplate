<template>
  <div class="forth-tab-container">
    {{tabText}}
  </div>
</template>

<script>
export default {
  computed: {
    tabText: function () {
      return 'Hello Fourth Tab'
    }
  }
}
</script>

<style lang="scss" scoped>
  .forth-tab-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

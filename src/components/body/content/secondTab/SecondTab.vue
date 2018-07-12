<template>
  <div class="second-tab">
    <div class="explanation-part">
      <img src="../../../../assets/info-icon.png"/>
    </div>
    <multiselect
      :value="selectedUserName"
      :options="fetchList"
      :close-on-select="true"
      :show-labels="false"
      :clear-on-select="false"
      placeholder="Select a user from fetchlist"
      @select="setSelectedUser"
    >
    </multiselect>
  </div>
</template>

<script>
import './secondTab.scss'
import controller from './secondTab.js'

export default controller()
</script>
<style src="../../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>

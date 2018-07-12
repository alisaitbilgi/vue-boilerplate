<template>
  <div class="second-tab">
    <div class="explanation-part">
      <img src="../../../../assets/info-icon.png"/>
    </div>
    <multiselect
      :options="userList"
      :close-on-select="true"
      trackBy="name"
      label="name"
      :clear-on-select="false"
      placeholder="Select a user to fetch"
      @select="setSelectedUser"
    >
    </multiselect>
    <div v-if="selectedUser.name !== ''" class="badge-container">
      <GitBadge />
    </div>
  </div>
</template>

<script>
import './secondTab.scss'
import controller from './secondTab.js'

export default controller()
</script>
<style src="../../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>

<template>
  <div class="second-tab">
    <div class="tab-content">
      <div class="explanation-container">
        <Tooltip />
      </div>
      <div class="user-selection-container">
        <div class="user-selector-part">
          <multiselect
            :value="selectedUser"
            :options="userList"
            :close-on-select="true"
            trackBy="name"
            label="name"
            :clear-on-select="false"
            placeholder="Select a user"
            @select="setSelectedUser"
          >
          </multiselect>
        </div>
        <div v-if="selectedUser.name !== 'Select a user'" class="badge-part">
          <GitBadge />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './secondTab.scss'
import controller from './secondTab.js'

export default controller()
</script>
<style src="../../../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>

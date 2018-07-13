<template>
  <div class="table-container">
    <div class="table-header">
      User Details
    </div>
    <div class="image-section">
      <div class="image-stick"/>
      <img class="user-image" v-bind:src="tableData.userImage">
      <div class="image-stick"/>
    </div>
    <div class="table-body">
      <div v-bind:key="eachField.fieldName" v-for="eachField in tableData.columnData" class="each-user-data">
        <div class="each-field-name">{{eachField.fieldName}}:</div>
        <div class="each-field-data">{{eachField.fieldData}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import './detailsTable.scss'
import controller from './detailsTable.js'

export default controller()

</script>

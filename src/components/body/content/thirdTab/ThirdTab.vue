<template>
  <div class="third-tab-container">
   <div id="container"></div>
   <datepicker placeholder="Select Date" v-model="startDate" :format="customFormatter"></datepicker>
   <datepicker placeholder="Select Date" v-model="endDate" :format="customFormatter"></datepicker>
    <p>{{ customFormatter(startDate) }}</p>
    <p>{{ customFormatter(endDate) }}</p>
  </div>
</template>

<script>
import './thirdTab.scss'
import init from './thirdTab.js'

export default init()
</script>

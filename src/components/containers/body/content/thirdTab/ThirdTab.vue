<template>
  <div class="third-tab-container">
   <div id="container"></div>
   <datepicker placeholder="Select Date" v-model="startDate" :format="customFormatter"></datepicker>
   <datepicker placeholder="Select Date" v-model="endDate" :format="customFormatter"></datepicker>
    <p>{{ customFormatter(startDate) }}</p>
    <p>{{ customFormatter(endDate) }}</p>

    <button v-on:click="getWeatherData">Click to get weather data</button>
  </div>
</template>

<script>
import './thirdTab.scss'
import controller from './thirdTab.js'

export default controller()
</script>

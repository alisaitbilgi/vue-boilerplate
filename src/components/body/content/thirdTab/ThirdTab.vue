<template>
  <div class="third-tab-container">
   <div id="container"></div>
   <datepicker placeholder="Select Date" v-model="vModelExample" :format="customFormatter"></datepicker>
    <p>{{ customFormatter(vModelExample) }}</p>
  </div>
</template>

<script>
import './thirdTab.scss'
import init from './thirdTab.js'

export default init()
</script>

<template>
  <vuetable ref="vuetable"
    api-url="https://jsonplaceholder.typicode.com/posts"
    :fields="fields"
  ></vuetable>
</template>

<script>
import './fourthTab.scss'
import init from './fourthTab.js'

export default init()
</script>

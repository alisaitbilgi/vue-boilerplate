<template>
<div class="post-table-container">
  <v-data-table
    :headers="headers"
    :items="postList"
    class="elevation-1 post-table"
  >
    <template slot="headerCell" slot-scope="props">
      <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.title }}</td>
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.userId }}</td>
    </template>
  </v-data-table>
</div>
</template>
<script>
import './fourthTab.scss'
import controller from './fourthTab.js'

export default controller()
</script>

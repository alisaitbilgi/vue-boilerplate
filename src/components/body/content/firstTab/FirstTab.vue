<template>
  <div class="first-tab-container">
    <vodal
      :show="isModalOpen"
      animation="fade"
      closeOnEsc @clickMask="toggleModal(false)"
      @hide="toggleModal(false)"
      width=400
      height=450
    >
      <DetailsTable />
    </vodal>
    <GitBadge />
    <div class="search-container">
      <input v-on:change="setUserInput" class="search-user"/>
    </div>
  </div>
</template>

<script>
import './firstTab.scss'
import controller from './firstTab.js'

export default controller()
</script>

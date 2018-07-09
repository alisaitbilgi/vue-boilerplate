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
    <div class="badge-container">
      <div class="data-badge">
        <pulse-loader :loading="isLoading" />
        <div v-if="!isLoading" class="badge-top-side">
          <div class="image-part">
            <img class="user-image" v-bind:src="userData.avatar"/>
          </div>
          <div class="name-part">
            <div class="user-name">
              {{userData.name || userData.login}}
            </div>
            <div
              class="see-details-btn"
              v-if="!isLoading && userData.followers"
              v-on:click="toggleModal(true)"
            >
              Details
            </div>
          </div>
        </div>
        <div v-if="!isLoading" class="badge-bottom-side">
          <div class="followers-part">
            <div class="each-field">
              <div class="field-name">
                followers:
              </div>
              <div class="field-data">
                {{userData.followers}}
              </div>
            </div>
            <div class="each-field">
              <div class="field-name">
                following:
              </div>
              <div class="field-data">
                {{userData.following}}
              </div>
            </div>
          </div>
          <div class="repo-part">
            <div class="each-field">
              <div class="field-name">
                repos:
              </div>
              <div class="field-data">
                {{userData.repos}}
              </div>
            </div>
            <div class="each-field">
              <div class="field-name">
                gists:
              </div>
              <div class="field-data">
                {{userData.gists}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-container">
      <input v-on:change="setUserInput" class="search-user"/>
    </div>
  </div>
</template>

<script>
import './firstTab.scss'
import init from './firstTab.js'

export default init()
</script>

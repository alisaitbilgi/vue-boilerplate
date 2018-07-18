
export default {
  SET_USER_DATA (state, currentData) {
    state.userData = currentData

    if (currentData.name && currentData.name !== 'No User Found') {
      state.userList.push(currentData)
    }
  },
  SET_LOADER (state, isLoading) {
    state.isLoading = isLoading
  },
  SET_POSTS (state, currentData) {
    state.postList = currentData
  },
  SET_START_DATE (state, currentData) {
    state.startDate = currentData
  },
  SET_END_DATE (state, currentData) {
    state.endDate = currentData

    console.log(currentData)
  },
  SET_WEATHER_DATA (state, currentData) {
    state.weatherData = currentData
  },
  TOGGLE_MODAL (state, isOpen) {
    state.isModalOpen = isOpen
  },
  SET_SELECTED_USER (state, user) {
    state.selectedUser = user
  }
}


export default {
  SET_USER_DATA (state, currentData) {
    state.userData = currentData
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
  SET_CSV_DATA (state, currentData) {
    state.csv = currentData
  },
  TOGGLE_MODAL (state, isOpen) {
    state.isModalOpen = isOpen
  }
}

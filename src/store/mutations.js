
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
  SET_DATE (state, currentData) {
    state.vModelExample = currentData
  }
}

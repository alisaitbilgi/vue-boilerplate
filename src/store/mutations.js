
export default {
  SET_USER_DATA (state, currentData) {
    state.userData = currentData
  },
  SET_POSTS (state, currentData) {
    state.postList = currentData
  },
  SET_CSV_DATA (state, currentData) {
    state.csv = currentData
  }
}

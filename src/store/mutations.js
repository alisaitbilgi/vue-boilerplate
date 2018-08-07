
export default {
  SET_CURRENT_TODO: function (state, data) {
    if (Array.isArray(state.todoItemList)) {
      state.todoItemList.push(data)
    }
  }
}

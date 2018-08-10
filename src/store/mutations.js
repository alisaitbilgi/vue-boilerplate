
export default {
  SET_TODO_ITEM: function (state, data) {
    if (Array.isArray(state.todoItemList)) {
      state.todoItemList.push(data)
    }
  },
  SET_TODO_LIST: function (state, data) {
    state.todoItemList = data
  },
  REMOVE_TODO_ITEM: function (state, id) {
    if (Array.isArray(state.todoItemList)) {
      state.todoItemList = state.todoItemList.filter(each => each.id !== id)
    }
  }
}

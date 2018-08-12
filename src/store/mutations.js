
export default {
  SET_TODO_TYPE: function (state, data) {
    state.selectedTodoType = data
  },
  SET_TODO_ITEM: function (state, {listName, data}) {
    if (Array.isArray(state.todoItemList[listName])) {
      state.todoItemList[listName].push(data)
    }
  },
  SET_TODO_LIST: function (state, {listName, data}) {
    state.todoItemList[listName] = data
  },
  REMOVE_TODO_ITEM: function (state, {listName, itemId}) {
    if (Array.isArray(state.todoItemList[listName])) {
      state.todoItemList[listName] = state.todoItemList[listName].filter(each => each.id !== itemId)
    }
  },
  SET_ALERT_TRIGGER: function (state, {type, text, visibilityTimeout = 5000}) {
    state.alertManager = {text, type, visible: true}
    setTimeout(() => {
      state.alertManager.visible = false
    }, visibilityTimeout)
  }
}

import axios from 'axios'
import $store from '../store/index.js'

/**
 * Uniquifies the array (array of objects) according to required key.
 * @param defaultList: array of object which is gonna be uniquified.
 * @param keyTbUniquified: reference key for uniquification operation.
 */

export function uniquifyArrayOfObjects (defaultList, keyTbUniquified) {
  const existincyCheckMap = {}

  return defaultList.filter(each => {
    if (typeof existincyCheckMap[each[keyTbUniquified]] === 'undefined') {
      existincyCheckMap[each[keyTbUniquified]] = true
    }

    if (existincyCheckMap[each[keyTbUniquified]]) {
      existincyCheckMap[each[keyTbUniquified]] = false

      return true
    }

    return false
  })
}

/**
 * Uniquifies the array (array of primitives).
 * @param defaultList: array which is gonna be uniquified.
 */

export function uniquifyArrayOfPrimitives (defaultList) {
  return [...new Set(defaultList)]
}

export function getTodoList (listName) {
  axios
    .get(`http://localhost:5000/api/v1/todolists/${listName}/items`)
    .then(val => $store.commit('SET_TODO_LIST', {listName, data: val.data}))
    // empty list condition has already been handled. However, for other error cases we can call alert-manager
    .catch()
}

export function setTodoItem (listName, description) {
  axios
    .post(`http://localhost:5000/api/v1/todolists/${listName}/items`, {description})
    .then(val => {
      const alertData = {type: 'success', text: `Successfully added ${listName} todo!`, visibilityTimeout: 2000}

      $store.commit('SET_TODO_ITEM', {listName, data: val.data})
      $store.commit('SET_ALERT_TRIGGER', alertData)
    })
    .catch(() => {
      const alertData = {type: 'error', text: `Failed to add ${listName} todo!`}

      $store.commit('SET_ALERT_TRIGGER', alertData)
    })
}

export function removeTodoItem (listName, itemId) {
  axios
    .delete(`http://localhost:5000/api/v1/todolists/${listName}/items/${itemId}`)
    .then(() => {
      const alertData = {
        type: 'success',
        text: `Successfully removed a todo from ${listName} list`,
        visibilityTimeout: 2000
      }

      $store.commit('REMOVE_TODO_ITEM', {listName, itemId})
      $store.commit('SET_ALERT_TRIGGER', alertData)
    })
    .catch(() => {
      const alertData = {type: 'error', text: `Failed to remove todo from ${listName} list!`}

      $store.commit('SET_ALERT_TRIGGER', alertData)
    })
}

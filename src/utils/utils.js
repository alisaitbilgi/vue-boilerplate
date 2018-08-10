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
    .then(val => $store.commit('SET_TODO_LIST', val.data))
    .catch(err => console.log('err: ', err))
}

export function setTodoItem (listName, description) {
  axios
    .post(`http://localhost:5000/api/v1/todolists/${listName}/items`, {description})
    .then(val => $store.commit('SET_TODO_ITEM', val.data))
    .catch(err => console.log('err: ', err))
}

export function removeTodoItem (listName, itemId) {
  axios
    .delete(`http://localhost:5000/api/v1/todolists/${listName}/items/${itemId}`)
    .then(() => $store.commit('REMOVE_TODO_ITEM', itemId))
}

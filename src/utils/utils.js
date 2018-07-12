import axios from 'axios/index'
import {converter} from 'number-gilder'

export function getUserData (username, store) {
  if (username) {
    store.commit('SET_LOADER', true)

    axios
      .get(`https://api.github.com/users/${username}`)
      .then(val => {
        const dataTbWritten = {
          account: val.data.login,
          name: val.data.name || val.data.login,
          followers: converter(val.data.followers),
          following: converter(val.data.following),
          repos: val.data.public_repos,
          gists: val.data.public_gists,
          avatar: val.data.avatar_url,
          location: val.data.location || 'not defined',
          company: val.data.company || 'not defined'
        }
        store.commit('SET_LOADER', false)
        store.commit('SET_USER_DATA', dataTbWritten)
      })
      .catch(() => {
        store.commit('SET_USER_DATA', {name: 'No User Found'})
        store.commit('SET_LOADER', false)
      })
  }
}

export function uniquifyArrayOfObjects (defaultList, referenceKeyTbUniquified) {
  const existincyCheckMap = {}

  return defaultList.filter(each => {
    if (typeof existincyCheckMap[each[referenceKeyTbUniquified]] === 'undefined') {
      existincyCheckMap[each[referenceKeyTbUniquified]] = true
    }

    if (existincyCheckMap[each[referenceKeyTbUniquified]]) {
      existincyCheckMap[each[referenceKeyTbUniquified]] = false

      return true
    }

    return false
  })
}

export function uniquifyArrayOfPrimitives (defaultList) {
  return [...new Set(defaultList)]
}

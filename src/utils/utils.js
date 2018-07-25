import axios from 'axios/index'
import {converter} from 'number-gilder'

function getDataTbWritten (data) {
  return {
    account: data.login,
    name: data.name || data.login,
    followers: converter(data.followers),
    following: converter(data.following),
    repos: data.public_repos,
    gists: data.public_gists,
    avatar: data.avatar_url,
    location: data.location || 'not defined',
    company: data.company || 'not defined'
  }
}

export function getUserData (username, store) {
  if (username) {
    store.commit('SET_LOADER', true)

    axios
      .get(`https://api.github.com/users/${username}`)
      .then(val => {
        const dataTbWritten = getDataTbWritten(val.data)

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

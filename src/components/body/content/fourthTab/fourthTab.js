// import axios from 'axios'
import $store from '../../../../store/index.js'

export default function init () {
  return {
    name: 'FirstTab',
    mounted () {
      const data = {a: 5, b: 7}

      $store.commit('SET_USER_DATA', data)
    },
    computed: {
      userData: function () {
        return $store.state.userData
      }
    }
  }
}

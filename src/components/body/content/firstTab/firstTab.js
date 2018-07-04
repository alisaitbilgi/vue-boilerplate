import axios from 'axios'
import $store from '../../../../store/index.js'
import {converter} from 'number-gilder'

export default function init () {
  return {
    name: 'FirstTab',
    computed: {
      userData: function () {
        return $store.state.userData
      }
    },
    methods: {
      setUserInput (event) {
        if (event.target.value) {
          this.getUserData(event.target.value)
        }
        event.target.value = ''
      },
      getUserData (username) {
        axios
          .get(`https://api.github.com/users/${username}`)
          .then(val => {
            const dataTbWritten = {
              name: val.data.name || val.data.login,
              followers: converter(val.data.followers),
              following: converter(val.data.following),
              repos: val.data.public_repos,
              gists: val.data.public_gists,
              avatar: val.data.avatar_url
            }

            $store.commit('SET_USER_DATA', dataTbWritten)
          })
          .catch(() => $store.commit('SET_USER_DATA', {name: 'No User Found'}))
      }
    },
    mounted () {
      // this.getUserData('nzakas')
    }
  }
}

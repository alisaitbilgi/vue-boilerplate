import axios from 'axios'
import $store from '../../../../store/index.js'
import {converter} from 'number-gilder'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default function init () {
  return {
    name: 'FirstTab',
    components: {
      PulseLoader
    },
    computed: {
      userData: function () {
        return $store.state.userData
      },
      isLoading: function () {
        return $store.state.isLoading
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
        $store.commit('SET_LOADER', true)

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
            $store.commit('SET_LOADER', false)
            $store.commit('SET_USER_DATA', dataTbWritten)
          })
          .catch(() => {
            $store.commit('SET_USER_DATA', {name: 'No User Found'})
            $store.commit('SET_LOADER', false)
          })
      }
    },
    mounted () {
      // this.getUserData('nzakas')
    }
  }
}

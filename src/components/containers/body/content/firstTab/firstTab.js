import {getUserData} from '../../../../../utils/utils.js'
import $store from '../../../../../store/index.js'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import GitBadge from '../../../../presenters/gitBadge/GitBadge.vue'

export default function controller () {
  return {
    name: 'FirstTab',
    components: {
      PulseLoader,
      GitBadge
    },
    methods: {
      setUserInput (event) {
        if (event.target.value) {
          this.getUserData(event.target.value)
        }
        event.target.value = ''
      },
      getUserData (username) {
        getUserData(username, $store)
      }
    },
    mounted () {
      // this.getUserData('nzakas')
    }
  }
}

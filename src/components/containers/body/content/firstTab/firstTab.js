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
      setUserName (event) {
        if (event.target.value) {
          getUserData(event.target.value, $store)
        }
        event.target.value = ''
      }
    },
    mounted () {
      getUserData('nzakas', $store)
    }
  }
}

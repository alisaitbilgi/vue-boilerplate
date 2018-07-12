import $store from '../../../../../store/index.js'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default function controller () {
  return {
    name: 'GitBadge',
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
      toggleModal (isOpen) {
        $store.commit('TOGGLE_MODAL', isOpen)
      }
    }
  }
}

import $store from '../../../../../store/index.js'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Vodal from 'vodal'
import DetailsTable from '../detailsTable/DetailsTable.vue'
import 'vodal/common.css'
import 'vodal/rotate.css'

export default function controller () {
  return {
    name: 'GitBadge',
    components: {
      Vodal,
      DetailsTable,
      PulseLoader
    },
    computed: {
      isModalOpen: function () {
        return $store.state.isModalOpen
      },
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
    },
    beforeDestroy () {
      $store.commit('SET_USER_DATA', {name: 'No User Found'})
    }
  }
}

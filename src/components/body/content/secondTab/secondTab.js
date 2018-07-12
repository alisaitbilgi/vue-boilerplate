import $store from '../../../../store'
import Multiselect from 'vue-multiselect'

export default function controller () {
  function getDropdownOptions (userList) {
    const defaultUserList = userList.map(each => each.name).filter(each => (each !== 'No User Found'))

    // here I'm returning uniquified user list
    return [...new Set(defaultUserList)]
  }

  return {
    name: 'SecondTab',
    components: {
      Multiselect
    },
    computed: {
      selectedUserName: function () {
        return $store.state.selectedUserName
      },
      fetchList: function () {
        return getDropdownOptions($store.state.fetchList)
      }
    },
    methods: {
      setSelectedUser (userName) {
        $store.commit('SET_SELECTED_USER', userName)
      }
    },
    beforeDestroy () {
      this.setSelectedUser('')
    }
  }
}

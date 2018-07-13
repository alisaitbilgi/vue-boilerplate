import $store from '../../../../../store/index.js'
import Multiselect from 'vue-multiselect'
import Tooltip from '../../../../presenters/tooltip/Tooltip.vue'
import {uniquifyArrayOfObjects, getUserData} from '../../../../../utils/utils.js'
import GitBadge from '../../../../presenters/gitBadge/GitBadge.vue'

export default function controller () {
  function getDropdownOptions (userList) {
    const defaultUserList = userList
      .filter(each => (each.name !== 'No User Found'))
      .map(each => {
        return {
          name: each.name,
          account: each.account
        }
      })

    return uniquifyArrayOfObjects(defaultUserList, 'name')
  }

  return {
    name: 'SecondTab',
    components: {
      Multiselect,
      GitBadge,
      Tooltip
    },
    computed: {
      selectedUser: function () {
        return $store.state.selectedUser
      },
      userList: function () {
        return getDropdownOptions($store.state.userList)
      }
    },
    methods: {
      setSelectedUser (user) {
        $store.commit('SET_SELECTED_USER', user)
        getUserData(user.account, $store)
      }
    },
    beforeDestroy () {
      this.setSelectedUser({name: 'Select a user', account: ''})
    }
  }
}

import $store from '../../../../store'
import Multiselect from 'vue-multiselect'
import {uniquifyArrayOfObjects, getUserData} from '../../../../utils/utils.js'
import GitBadge from '../firstTab/gitBadge/GitBadge.vue'

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
      GitBadge
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
      this.setSelectedUser({name: '', account: ''})
    }
  }
}

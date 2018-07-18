// import axios from 'axios'
import axios from 'axios'
import $store from '../../../../store/index.js'
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default function controller () {
  return {
    name: 'FirstTab',
    data: function () {
      return {
        fields: ['id', 'title', 'body']
      }
    },
    mounted () {
      this.getPosts()
    },
    computed: {
      postList: function () {
        return $store.state.postList
      }
    },
    components: {
      Vuetable
    },
    methods: {
      getPosts: function () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(function (response) {
            $store.commit('SET_POSTS', response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
          .then(function () {
            // always executed
          })
      }
    }
  }
}

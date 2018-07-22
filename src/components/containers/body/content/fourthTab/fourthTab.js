// import axios from 'axios'
import axios from 'axios'
import $store from '../../../../../store/index.js'
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)

export default function controller () {
  return {
    name: 'FirstTab',
    data: function () {
      return {
        headers: [
          {text: 'Title', align: 'left', sortable: false, value: 'title'},
          {text: 'Id', value: 'id'},
          {text: 'User Id', value: 'userId'}
        ]
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

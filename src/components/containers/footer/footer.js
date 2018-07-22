import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)

export default function footer () {
  return {
    data: function () {
      return {
        bottomNav: 'recent'
      }
    }
  }
}

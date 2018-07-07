
import $store from '../../../../store/index.js'
import thirdTabAPI from './thirdTabAPI.js'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

export default function init () {
  return {
    name: 'ThirdTab',
    data: function () {
      return {
        cities: [{
          name: 'Tokyo',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
          name: 'Denver',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        }, {
          name: 'Nairobi',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
        }, {
          name: 'Berlin',
          data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        }, {
          name: 'Moscow',
          data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        }, {
          name: 'Oslo',
          data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        }, {
          name: 'Helsinki',
          data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        }, {
          name: 'Rio',
          data: [43.45, 56.2, 23.5, 34.5, 24.3, 53.52, 51.2, 50.6, 43.6, 34.1, 34.8, 43.1]
        }]
      }
    },
    mounted: function () {
      thirdTabAPI.getHighchartsData(this.cities)
    },
    components: {
      Datepicker
    },
    methods: {
      customFormatter: date => moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    computed: {
      postList: function () {
        return $store.state.postList
      },
      vModelExample: {
        get: () => $store.state.vModelExample,
        set (v) {
          $store.commit('SET_DATE', v)

          console.log($store.state.vModelExample)
        }
      }
    }
  }
}

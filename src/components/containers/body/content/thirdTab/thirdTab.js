
import $store from '../../../../../store/index.js'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import axios from 'axios'
import Highcharts from 'highcharts'
import {uniquifyArrayOfPrimitives} from '../../../../../utils/utils.js'

export default function controller () {
  return {
    name: 'ThirdTab',
    data: function () {
      return {
        weatherData: [],
        startDate: null,
        endDate: null,
        cityIds: ['524901', '184745'] // moscow, nairobi, tokio, denver, berlin, oslo, helsinki, rio
        // cityIds: ['524901', '184745', '1850147', '4463523', '2950158', '6453366', '658225', '2735135'] // moscow, nairobi, tokio, denver, berlin, oslo, helsinki, rio
      }
    },
    mounted: function () {
      
    },
    components: {
      Datepicker
    },
    methods: {
      customFormatter: date => moment(date).format('MMMM Do YYYY, h:mm:ss a'),
      getWeatherData () {
        const requestMap = this.cityIds.map(function (val) {
          return axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${val}&appid=f6e48e0ff2e2dc8a207065d39e9acd5f`)
        })
        axios.all(requestMap)
          .then((acct, perms) => {
            this.weatherData = acct.map(function (val) {
              return val.data.list.map(function (item) {
                return {
                  date: item.dt, temp: item.main.temp, name: val.data.city.name
                }
              })
            })
            $store.commit('SET_WEATHER_DATA', this.weatherData)

            this.getHighchartsData()
          })
          .catch(function (error) {
            //console.log(error)
          })
          .then(function () {
            // always executed
          })
      },
      getHighchartsData () {
        const data = this.weatherData
        const bok = data.map(val => val.map(item => item.name))
        const nameList = bok.map(item => uniquifyArrayOfPrimitives(item))
        Highcharts.chart('container', {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Average Temperature'
          },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          yAxis: {
            title: {
              text: 'Temperature'
            },
            labels: {
              formatter: function () {
                return this.value + '°'
              }
            }
          },
          tooltip: {
            crosshairs: true,
            shared: true
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
          series: nameList
        })
      },
      generateCityData (name, data) {
        return {
          name,
          marker: {
            symbol: 'square'
          },
          data
        }
      }
    },
    computed: {
      handleStartDate: {
        get: () => $store.state.form.startDate,
        set: v => $store.commit('SET_START_DATE', v)
      },
      handleEndDate: {
        get: () => $store.state.form.endDate,
        set: v => $store.commit('SET_END_DATE', v)
      }
    }
  }
}

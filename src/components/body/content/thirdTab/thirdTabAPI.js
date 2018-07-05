import Highcharts from 'highcharts'
import axios from 'axios'
import $store from '../../../../store/index.js'

const thirdTabAPI = {
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
  },
  getHighchartsData: function (cities) {
    Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly Average Rainfall'
      },
      subtitle: {
        text: 'Source: WorldClimate.com'
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rainfall (mm)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: cities
    })
  }
}

export default thirdTabAPI

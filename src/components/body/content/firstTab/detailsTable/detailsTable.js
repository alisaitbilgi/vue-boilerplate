import $store from '../../../../../store/index.js'

export default function init () {
  return {
    name: 'DetailsTable',
    computed: {
      tableData: function () {
        const userImage = $store.state.userData.avatar
        const columnTitles = Object.keys($store.state.userData).filter(each => each !== 'avatar')
        const columnData = columnTitles.map(each => {
          return {
            fieldName: each,
            fieldData: $store.state.userData[each]
          }
        })

        return {columnTitles, columnData, userImage}
      }
    }
  }
}

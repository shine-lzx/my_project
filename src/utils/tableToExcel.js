function tableToExcel (tableList, tHeader, filterVal, fileName) {
  require.ensure([], () => {
    const { export_json_to_excel } = require('@/vendor/Export2Excel')
    let list = tableList
    let data = formatJson(filterVal, list)
    export_json_to_excel(tHeader, data, fileName)
  })
}

function formatJson (filterVal, jsonData) {
  return jsonData.map(v => filterVal.map(j => v[j]))
}

export default tableToExcel

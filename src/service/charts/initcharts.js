export default (ele, option) => {
  let echarts = require('echarts')
  let myChart = echarts.init(document.getElementById(ele))
  return myChart
}

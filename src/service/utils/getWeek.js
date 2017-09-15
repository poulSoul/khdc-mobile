import {DateFormat} from './DateFormat'
/**
 * [getWeek 获取某个时间是某年第几周] 注意：每周从周末开始
 * @param  {[type]} time [时间]
 * @return {[obj]}      [count:周数；weekStart:周开始时间；weekEnd：周结束时间]
 */
const getWeek = function (time) {
  let date = new Date(time)
  let curWeekDate = date.getDay()
  let firstDay = new Date(date.getFullYear() + '/1/1')
  let firstDayWeek = firstDay.getDay() || 7
  let startTime = firstDay.getTime()
  let oneDateMi = 86400 * 1000
  let curMi = date.getTime()
  let diff = 0
  let weekCount = 0
  let weekStart = ''
  let weekEnd = ''

  // 依据周三来判断每年开始的那几天是属于今年或者去年
  if (firstDayWeek <= 3) {
    startTime = startTime - (3 * oneDateMi)
  } else if (firstDayWeek <= 6) {
    startTime = startTime + (7 - firstDayWeek) * oneDateMi
  }

  diff = curMi - startTime
  weekCount = Math.ceil(diff / (7 * oneDateMi))

  weekStart = DateFormat('yyyy-MM-dd', curMi - curWeekDate * oneDateMi)
  weekEnd = DateFormat('yyyy-MM-dd', curMi + (6 - curWeekDate) * oneDateMi)

  return {
    count: weekCount,
    weekStart: weekStart,
    weekEnd: weekEnd
  }
}

export {
  getWeek
}

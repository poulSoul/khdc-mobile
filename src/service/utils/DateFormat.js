import {
  mixin
} from './mixin'

/**
 * [DateFormat 日期格式化]
 * @param {[string]} format [yyyy-MM-dd]
 * @param {[Object]} time   [时间]
 *
 * eg:
 * const format = DateFormat('yyyy-MM-dd', new Date()) => 2017-09-12
 */
const DateFormat = function (format, time) {
  let context = {
    dateType: 'yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s',
    format: {
      year: 'yyyy',
      month: 'yyyy-MM',
      date: 'yyyy-MM-dd',
      time: 'HH:mm:ss',
      datetime: 'yyyy-MM-dd HH:mm:ss'
    }
  }
  let EXP_SPLIT = ''
  let EXP_IF = ''
  time = new Date(time)
  let dateTime = {
    year: time.getFullYear(),
    month: time.getMonth(),
    date: time.getDate(),
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds()
  }
  // 将日期格式转化成数组
  format = format.match(new RegExp(context.dateType + '|.', 'g')) || []

  mixin.each(format, function (i, item) {
    let EXP = new RegExp(context.dateType).test(item) ? '\\b\\d{1,' + (function () {
      if (/yyyy/.test(item)) return 4
      if (/y/.test(item)) return 308
      return 2
    })() + '}\\b' : '\\' + item
    EXP_IF = EXP_IF + EXP
    EXP_SPLIT = EXP_SPLIT + (EXP_SPLIT ? '|' : '') + '(' + EXP + ')'
  })
  EXP_IF = new RegExp('^' + EXP_IF + '$')
  EXP_SPLIT = new RegExp(EXP_SPLIT, 'g')

  mixin.each(format, function (i, item) {
    if (/yyyy|y/.test(item)) { // 年
      format[i] = mixin.digit(dateTime.year, item.length)
    } else if (/MM|M/.test(item)) { // 月
      format[i] = mixin.digit(dateTime.month + 1, item.length)
    } else if (/dd|d/.test(item)) { // 日
      format[i] = mixin.digit(dateTime.date, item.length)
    } else if (/HH|H/.test(item)) { // 时
      format[i] = mixin.digit(dateTime.hours, item.length)
    } else if (/mm|m/.test(item)) { // 分
      format[i] = mixin.digit(dateTime.minutes, item.length)
    } else if (/ss|s/.test(item)) { // 秒
      format[i] = mixin.digit(dateTime.seconds, item.length)
    }
  })

  return format.join('')
}
export {
  DateFormat
}

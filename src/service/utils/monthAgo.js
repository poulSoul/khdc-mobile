const monthAgo = function (diff, time = Date()) {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let curMonth = month
  diff = month + diff

  if (diff <= 0) {
    let yearCount = Math.floor(diff / 12)
    diff = diff % 12
    year += yearCount
    curMonth = diff + 12
  } else if (diff > 12) {
    let yearCount = Math.floor(diff / 12)
    diff = diff % 12
    year += yearCount
    curMonth = diff
  } else {
    curMonth = diff
  }
  return [year, curMonth, new Date(year + '/' + curMonth + '/1').getTime()]
}

export {
  monthAgo
}

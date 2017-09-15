const mixin = {
  each (obj, fn) {
    let key
    let that = this
    if (typeof fn !== 'function') return that
    obj = obj || []
    if (obj.constructor === Object) {
      for (key in obj) {
        if (fn.call(obj[key], key, obj[key])) break
      }
    } else {
      for (key = 0; key < obj.length; key++) {
        if (fn.call(obj[key], key, obj[key])) break
      }
    }
    return that
  },
  digit (num, length, end) {
    let str = ''
    num = String(num)
    length = length || 2
    for (let i = num.length; i < length; i++) {
      str += '0'
    }
    return num < Math.pow(10, length) ? str + (num | 0) : num
  }
}
export {
  mixin
}

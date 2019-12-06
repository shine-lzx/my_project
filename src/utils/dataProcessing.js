/**
 * 两个数组合并成一个对象数组,考虑到复杂度,所以目前支持两个一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 * @param {oneKey} oneKey 选填,如果两个都未传,直接以 arrOne 的值作为 key,arrTwo 作为 value
 * @param {twoKey} twoKey
 */
export const arrTwoToArrObj = (arrOne, arrTwo, oneKey, twoKey) => {
  if (!oneKey && !twoKey) {
    return arrOne.map((oneKey, i) => ({ [oneKey]: arrTwo[i] }))
    // 或者
    // return Object.assign({}, arrOne, arrTwo)
  } else {
    return arrOne.map((oneKey, i) => ({ oneKey, twoKey: arrTwo[i] }))
  }
}

/**
 * 数组合并,目前合并一维
 * @param {Array} arrOne 数组
 * @param {Array} arrTwo 数组
 */
export const arrConcat = (arrOne, arrTwo) => {
  return [...arrOne, ...arrTwo]
}

/**
 * 数组去重
 * @param {Array} arr  数组
 */
export const arrRemoveRepeat = arr => {
  return Array.from(new Set(arr))
}

/**
 * 数组排序
 * @param {Array} arr  数组
 * @param {Boolean} ascendFlag   升序,默认为 true
 */
export const arrOrderAscend = (arr, ascendFlag = true) => {
  return arr.sort((a, b) => {
    return ascendFlag ? a - b : b - a
  })
}

/**
 *  判断是否是数字
 * @param {Number} data
 */
export const checkNum = data => /^\d{1,}$/g.test(data)

/**
 *  判断是否是字母
 * @param {Number} data
 */
export const checkLetter = data => /^[a-zA-Z]+$/g.test(data)

/**
 *  判断是否全部是小写字母
 * @param {Number} data
 */
export const checkLowercaseLetter = data => /^[a-z]+$/g.test(data)

/**
 *  判断是否是大写字母
 * @param {Number} data
 */
export const checkCapitalLetter = data => /^[A-Z]+$/g.test(data)

/**
 * 判断是否是字母或数字
 * @param {Number || String} data  字符或数字
 */
export const checkNumOrLetter = data => /^[0-9a-zA-Z]*$/g.test(data)

/**
 * 判断是否是中文
 * @param {String} data  中文
 */
export const checkChinese = data => /^[\u4E00-\u9FA5]+$/g.test(data)

/**
 * 判断是否是邮箱地址
 * @param {String} data
 */
// export const checkEmail = data => {
//   const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
//   if (reg.test(data)) return true
// }

/**
 * 判断是否是手机号，只要是13,14,15,16,17,18,19开头即可
 * @param {String} data
 */
export const checkTelphone = data => {
  const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
  if (reg.test(data)) return true
}

/**
 * 判断是否是正确的网址
 * @param {String} url 网址
 */
export const checkUrl = url => {
  const a = document.createElement('a')
  a.href = url
  return [
    /^(http|https):$/.test(a.protocol),
    a.host,
    a.pathname !== url,
    a.pathname !== `/${url}`
  ].find(x => !x) === undefined
}

/**
 * 判断是终端类型,值有ios,android,iPad
 */
export const checkIosAndroidIpad = () => {
  const u = navigator.userAgent
  const obj = {
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
    iPad: u.indexOf('iPad') > -1 // 是否iPad
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
}

/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
 */
export const throttle = function (func, delay) {
  let timer = null
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arguments)
        // 或者直接 func()
        timer = null
      }, delay)
    }
  }
}

/**
 * 防抖
 * @param {*} fn 执行函数
 * @param {*} wait 防抖时间,毫秒
 */
export const debounce = function (fn, wait) {
  let timeout = null
  return function () {
    if (timeout !== null) clearTimeout(timeout)// 如果多次触发将上次记录延迟清除掉
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
      // 或者直接 fn()
      timeout = null
    }, wait)
  }
}

/**
 *  比较时间 1 小于时间 2
 * @param {String} timeOne  时间 1
 * @param {String} timeTwo  时间 2
 */
export const compareTimeOneLessTwo = (timeOne, timeTwo) => {
  // 判断 timeOne 和 timeTwo 是否
  return new Date(timeOne.replace(/-/g, '/')).getTime() < new Date(timeTwo.replace(/-/g, '/')).getTime()
}

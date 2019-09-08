// 节流函数
// 连续触发的频率大于设定频率时
// 按照设定频率为准触发

/**
 *
 * @param {function} fn
 * @param {number} wait
 */
function throttle(fn, wait) {
  let start = 0
  return function(...args) {
    let current = Date.now()
    if (current - start < wait) return
    start = current
    fn.apply(this, args)
  }
}

module.exports = throttle

// test
throttleFun = throttle(() => {
  console.log('yes')
}, 1000)

setInterval(() => {
  throttleFun()
}, 500)

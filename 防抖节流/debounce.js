// 防抖函数
// 连续调用不生效，停止连续触发后执行

/**
 *
 * @param {function} fn
 * @param {number} wait
 */
function debounce(fn, wait) {
  // 闭包计时器
  let timer = null

  // 返回debounce后的函数
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, wait)
  }
}

module.exports = debounce

// test
let debouncedFun_1 = debounce(() => {
  console.log('yes')
}, 900)

let debouncedFun_2 = debounce(() => {
  console.log('no')
}, 1100)

setInterval(() => {
  debouncedFun_1()
  debouncedFun_2()
}, 1000)

// out put =>
//  yes
//  yes
//  yes
//  ...

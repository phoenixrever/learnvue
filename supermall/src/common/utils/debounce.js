/**
 * 防抖函数(频繁获取数据)
 * @param1 执行函数
 * @param2 等待时间
 */
export function debounce( func, delay) {

  let timer = null;
  return function (...args) {
    if (timer) {
      timer = clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay)
  }
}

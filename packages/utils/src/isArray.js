/**判断是否为数组
 * @param {Array} arg
 * @returns {Boolean}
 */
export const isArray = (arg) => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * @returns {Object}
 * @description 深度合并多个对象的方法
 */
export const deepAssign = function () {
  let len = arguments.length,
    target = arguments[0]
  if (!isPlainObject(target)) {
    target = {}
  }
  for (let i = 1; i < len; i++) {
    let source = arguments[i]
    if (isPlainObject(source)) {
      for (let s in source) {
        if (s === '__proto__' || target === source[s]) {
          continue
        }
        if (isPlainObject(source[s])) {
          target[s] = deepAssign(target[s], source[s])
        } else {
          target[s] = source[s]
        }
      }
    }
  }
  return target
}

/**
 * @returns {boolean}
 * @description 判断对象是否是一个纯粹的对象
 */
const isPlainObject = (obj) => {
  return typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]'
}

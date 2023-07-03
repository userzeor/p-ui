/**
 * @description 深度合并多个对象的方法
 * @example deepAssign(Object, Object, ...)
deepAssign({}, { a: 1 }, { b: 3 })
 * @return {Object}
 * @param {} json 对象
 * @param ...args 是一个参数列表表示可以传多个参数对象
 */
export const deepAssign = function () {
  const len = arguments.length
  let target = arguments[0]
  if (!isPlainObject(target)) {
    target = {}
  }
  for (let i = 1; i < len; i++) {
    const source = arguments[i]
    if (isPlainObject(source)) {
      for (const s in source) {
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

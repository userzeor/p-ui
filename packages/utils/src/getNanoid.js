import { nanoid } from 'nanoid'

/**
 * @description 生成唯一id
 * @example const nId = getNanoid(32)
 * @return {string} 返回字符串id
 * @param {number} len 生成唯一id的长度
 */
export const getNanoid = (len = 16) => {
  return nanoid(len)
}

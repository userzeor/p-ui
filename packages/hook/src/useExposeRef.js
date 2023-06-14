/** 提前传入的ref并抛出 */
const extractRef = (proxy, exposeObj) => {
  for (const key in proxy.$refs) {
    if (Object.hasOwnProperty.call(proxy.$refs, key)) {
      const element = proxy.$refs[key]
      exposeObj[key] = element
    }
  }
  return exposeObj
}

export const useExposeRef = extractRef

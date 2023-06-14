import { computed, getCurrentInstance } from 'vue'
/** 表单option的项 */
const opList = computed(() => {
  return (item) => {
    const { proxy } = getCurrentInstance()
    let dictOpList = []
    if (!item.dict) {
      /** 不用字典项 */
      dictOpList = item.options
    } else {
      /** 用字典项 */
      dictOpList = proxy.useDict(item?.dict)[item?.dict].value
    }
    return dictOpList ?? []
  }
})

export const useOption = opList

<template>
  <div class="com-container">
    <el-select v-model="formModel" v-bind="itemConfig.props">
      <el-option
        v-for="(opItem, opIndex) in opList"
        :key="opIndex"
        :label="itemConfig.opCustomKey ? opItem[itemConfig.opCustomKey['label']] : opItem.label"
        :value="itemConfig.opCustomKey ? opItem[itemConfig.opCustomKey['value']] : opItem.value"
      />
    </el-select>
  </div>
</template>

<script setup name="Select">
import { computed, reactive, getCurrentInstance, onMounted } from 'vue'
import { useVModel } from '@vueuse/core'
import { useExposeRef } from '@p-ui/hook'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  /** 传入的v-model */
  modelValue: {
    type: [String, Array, Number, Boolean, Object],
    default: ''
  },
  /** 传入的json的当前项的配置 */
  itemConfig: {
    type: Object,
    default: () => {}
  },
  /** 父组件的实例 */
  instance: {
    type: Object,
    default: () => {}
  }
})

/** 解决v-model的双向绑定问题 */
const formModel = useVModel(props, 'modelValue', emit)

/** 当前组件实例 */
const { proxy } = getCurrentInstance()

/** 初始化字典项值 */
const opList = computed(() => {
  if (!props.itemConfig?.dict) {
    /** 不用字典项 */
    return props.itemConfig?.options
  } else {
    /** 用字典项 */
    const fields = [props.itemConfig?.dict]
    const { [fields[0]]: fieldList } = proxy.useDict(props.itemConfig?.dict)
    return fieldList.value
  }
})

/** 抛出ref实例 */
onMounted(() => {
  exposeObj = useExposeRef(proxy, exposeObj)
})

let exposeObj = reactive({})

defineExpose(exposeObj)
</script>
<style lang="scss" scoped>
.com-container {
  width: 100%;
}
</style>

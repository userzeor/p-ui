<template>
  <div class="com-container">
    <el-upload v-model:file-list="formModel" v-bind="itemConfig.props">
      <el-icon><Plus /></el-icon>
    </el-upload>
  </div>
</template>

<script setup name="Upload">
import { reactive, getCurrentInstance, onMounted } from 'vue'
import { useVModel } from '@vueuse/core'
import { useExposeRef } from '@p-ui/hook'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  /** 传入的v-model */
  modelValue: {
    type: Array,
    default: () => []
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

/** 抛出ref实例 */
onMounted(() => {
  exposeObj = useExposeRef(proxy, exposeObj)
})

let exposeObj = reactive({})

defineExpose(exposeObj)
</script>
<style lang="scss" scoped></style>

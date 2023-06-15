<template>
  <div class="com-container">
    <el-date-picker
      v-model="formModel"
      v-bind="itemConfig.props"
      value-format="YYYY-MM-DD HH:mm:ss"
      @change="dateChange"
    />
  </div>
</template>

<script setup name="DatePicker">
import { ref, reactive, getCurrentInstance, onMounted, nextTick } from 'vue'
import { useVModel } from '@vueuse/core'
import { useExposeRef } from '@p-ui/hook'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  /** 传入的v-model */
  modelValue: {
    type: [String, Date, Number, Array],
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

/** 抛出ref实例 */
onMounted(() => {
  exposeObj = useExposeRef(proxy, exposeObj)
})

let exposeObj = reactive({})

defineExpose(exposeObj)

const dateChange = (val) => {
  if (!val) {
    // 此处处理点击清除按钮返回null的问题
    nextTick(() => {
      formModel.value = ['', '']
    })
  }
}
</script>
<style lang="scss" scoped></style>

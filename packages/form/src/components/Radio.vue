<template>
  <div class="com-container">
    <el-radio-group v-model="formModel" v-bind="itemConfig.props">
      <el-radio
        v-for="(opItem, opIndex) in useOption(itemConfig)"
        :key="opIndex"
        :label="itemConfig.opCustomKey ? opItem[itemConfig.opCustomKey['value']] : opItem.value"
      >
        {{ itemConfig.opCustomKey ? opItem[itemConfig.opCustomKey['label']] : opItem.label }}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script setup name="Radio">
import { reactive, getCurrentInstance, onMounted } from 'vue'
import { useVModel } from '@vueuse/core'
import { useExposeRef } from '@p-ui/hook'
import { useOption } from '@p-ui/hook'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  /** 传入的v-model */
  modelValue: {
    type: [String, Number, Array],
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
</script>
<style lang="scss" scoped></style>

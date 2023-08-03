<template>
  <div>
    <el-tree ref="treeRef" :filter-node-method="filterNode" v-bind="$attrs" />
  </div>
</template>

<script setup name="p-tree">
import { ref, watch } from 'vue'

// const filterText = ref('222')
const props = defineProps({
  modelValue: {
    type: String,
    default() {
      return {}
    }
  }
})
const treeRef = ref('treeRef')

watch(
  () => props.modelValue,
  () => {
    treeRef.value && treeRef.value.filter(props.modelValue)
  },
  { deep: true }
)

const filterNode = (val, data) => {
  if (!val) return true
  return data.label.includes(val)
}
</script>

<style scoped lang="scss">
.p-tree {
}
</style>

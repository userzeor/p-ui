<template>
  <div>
    <el-input v-model="filterText" placeholder="请输入" v-if="treeObject.treeFilter" />
    <el-tree
      ref="treeRef"
      :data="treeData"
      :props="treeObject.defaultProps"
      :show-checkbox="treeObject.showCheckbox"
      :node-key="treeObject.nodeKey"
      :default-expand-all="treeObject.defaultExpandAll"
      :default-expanded-keys="treeObject.defaultExpandedKeys"
      :default-checked-keys="treeObject.defaultCheckedKeys"
      :accordion="treeObject.accordion"
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
      :draggable="treeObject.dragAble"
      @node-drop="handleDrop"
    />
  </div>
</template>

<script setup name="p-tree">
import { ref, watch, defineProps } from 'vue'
const filterText = ref('')
const emits = defineEmits(['nodeClickBack', 'draggBack'])
const props = defineProps({
  treeData: {
    default() {
      return {}
    },
    type: Array
  },
  treeObject: {
    default() {
      return {}
    },
    type: Object
  }
})
const treeRef = ref('treeRef')

watch(filterText, (val) => {
  treeRef.value && treeRef.value.filter(val)
})

const filterNode = (val, data) => {
  if (!val) return true
  return data.label.includes(val)
}

const handleNodeClick = (data) => {
  emits('nodeClickBack', data)
}
const handleDrop = (draggingNode, dropNode, dropType, ev) => {
  emits('draggBack', ev)
}
</script>

<style scoped lang="scss">
.p-tree {
}
</style>

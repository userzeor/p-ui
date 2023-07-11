<template>
  <div>
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
      :expand-on-click-node="treeObject.expandOnClickNode"
    />
  </div>
</template>

<script setup name="p-tree">
import { ref, watch } from 'vue'
import { useVModel } from '@vueuse/core'
// const filterText = ref('222')
const emits = defineEmits(['nodeClickBack', 'draggBack', 'update:modelValue'])
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
  },
  modelValue: {
    type: String,
    default() {
      return {}
    }
  }
})
const treeRef = ref('treeRef')

/** 解决v-model的双向绑定问题 */
// const filterText = useVModel(props, 'modelValue', emits)

// console.log(filterText.value)
// console.log(treeRef.value)
// treeRef.value.filter(filterText.value)

// treeRef.value && treeRef.value.filter(content)

// watch(props.modelValue, (val) => {
//   console.log(val)
//   treeRef.value && treeRef.value.filter(val)
// })

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

const handleNodeClick = (data) => {
  emits('nodeClickBack', data)
}
const handleDrop = (draggingNode, dropNode, dropType, ev) => {
  emits('draggBack', ev)
}

/**
    @prop treeData | 树组件内容 | Array | [] | []
    @prop treeObject | 树组件配置参数 | Object | {} | {}
    @prop showCheckbox | 是否显示复选框 | boolean | true false | false
    @prop nodeKey | 默认展开和选择必须设置的值 | string | - | -
    @prop defaultProps | 节点属性 | Object | {children:'',label:''} | -
    @prop defaultExpandedKeys | 展开节点 | Array | [] | []
    @prop defaultCheckedKeys | 默认选择节点 | Array | [] | []
    @prop defaultCheckedKeys | 默认选择节点 | Array | [] | []
    @prop defaultExpandAll | 是都展开全部节点 | boolean | true false | false
    @prop accordion | 手风琴模式 | boolean | true false | false
    @prop dragAble | 是否拖拽 | boolean | true false | false

 */
</script>

<style scoped lang="scss">
.p-tree {
}
</style>

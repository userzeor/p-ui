<template>
    <el-input v-model="modelValue" placeholder="请输入"  />
    <p-tree
        :treeData="treeData"
        :treeObject="treeObject"
        v-model="modelValue"
        @nodeClickBack="backNodeClick"
        @draggBack="draggBack"
    ></p-tree>
</template>

<script setup>
import { reactive, ref } from 'vue'
const treeObject = reactive({
  showCheckbox: false,
  nodeKey: 'id', // 默认展开和选择必须设置的值
  defaultProps: {
    children: 'children',
    label: 'label'
  }, // 节点属性
  defaultExpandedKeys: [], // 展开节点
  defaultCheckedKeys: [], // 默认选择节点
  defaultExpandAll: false, // 展开全部节点
  accordion: false, // 手风琴模式
  dragAble: false, // 拖拽
  expandOnClickNode: false // 是否在点击节点的时候展开或者收缩节点
})
const modelValue = ref('')
const backNodeClick = (val) => {
  console.log(val.label)
}
const treeData = reactive([
  {
    label: 'Level one 1',
    id: 1,
    children: [
      {
        label: 'Level two 1-1',
        id: 4,
        disabled: true,
        children: [
          {
            label: 'Level three 1-1-1',
            id: 9
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 2',
    id: 2,
    children: [
      {
        label: 'Level two 2-1',
        id: 5,
        children: [
          {
            label: 'Level three 2-1-1',
            id: 6
          }
        ]
      },
      {
        id: 7,
        label: 'Level two 2-2',
        children: [
          {
            id: 8,
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    id: 9,
    children: [
      {
        label: 'Level two 3-1',
        id: 10,
        children: [
          {
            label: 'Level three 3-1-1',
            id: 11
          }
        ]
      },
      {
        label: 'Level two 3-2',
        id: 12,
        children: [
          {
            id: 13,
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
])

const draggBack = (val) => {
  console.log(val)
}
</script>

<style scoped lang="scss"></style>

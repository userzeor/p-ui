<template>
  <div class="com-container">
    <div class="p-table-toolbar-box">
      <div class="tool-left">
        <slot name="toolBarLeft"></slot>
      </div>
      <div class="tool-right">
        <el-tooltip effect="dark" content="显示列/隐藏列" placement="top">
          <div>
            <el-popover width="auto" trigger="click">
              <el-input v-model="searchText" placeholder="请输入" />
              <p-tree
                :treeData="treeData"
                :treeObject="treeObject"
                v-model="searchText"
                @check-change="backNodeClick"
                @draggBack="draggBack"
              ></p-tree>
              <template #reference>
                <el-button circle icon="Menu"></el-button>
              </template>
            </el-popover>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup name="tableToolBar">
import { ref, reactive, computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { getNanoid } from '@p-ui/utils'

const emit = defineEmits(['update:columns'])

const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  }
})

// table的列的信息
const columnsModel = useVModel(props, 'columns', emit)

// 节点搜索值
const searchText = ref('')

// 节点数信息
const treeData = computed(() => {
  const columnList = recursiveFilter(columnsModel.value, 'type', ['selection', 'index ', 'expand'])
  return columnList
})

// 根据字段值递归过滤元素
function recursiveFilter(objArray, typeKey, filterTypes) {
  return objArray.filter((obj) => {
    if (obj[typeKey] && filterTypes.includes(obj[typeKey])) {
      return false // 过滤满足条件的元素
    }

    // 给树节点添加唯一node-key
    obj._uniqueKey = getNanoid()

    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        obj[key] = recursiveFilter(obj[key], filterTypes) // 递归处理嵌套对象
      }
    }

    return true // 保留不满足条件的元素
  })
}

const treeObject = reactive({
  showCheckbox: true,
  nodeKey: '_uniqueKey', // 默认展开和选择必须设置的值
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

// 节点点击的回调事件
const backNodeClick = (val, nodeCheck) => {
  // 设置列的显示和隐藏
  val.visible = nodeCheck
}

// 拖拽的回调事件
const draggBack = (val) => {
  console.log(val)
}
</script>
<style lang="scss" scoped>
.p-table-toolbar-box {
  display: flex;
  padding: 11px 0;
  align-items: center;
  justify-content: space-between;
}
</style>

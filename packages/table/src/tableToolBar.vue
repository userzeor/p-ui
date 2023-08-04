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
                :data="columnsModel"
                :showCheckbox="true"
                :default-checked-keys="defaultCheckedKeyList"
                node-key="_uniqueKey"
                v-model="searchText"
                :props="defaultProps"
                @check="backNodeClick"
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
import { getNanoid, deepAssign } from '@p-ui/utils'

const emit = defineEmits(['update:columns'])

const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  }
})

const defaultProps = {
  children: 'children',
  label: 'label'
}

// table的列的信息
const columnsModel = useVModel(props, 'columns', emit)

// 节点搜索值
const searchText = ref('')

// 节点数信息
const treeData = computed(() => {
  const columnList = recursiveFilter(columnsModel.value, 'type', ['selection', 'index ', 'expand'])
  return columnList
})

const getDefaultCheckedKeyList = () => {
  const defaultCheckedKeyArr = recursiveFilter(columnsModel.value, 'visible', [undefined])
  return recursiveVisibleFields(defaultCheckedKeyArr, '_uniqueKey')
}

// 递归遍历数组对象根据visible字段返回node-key数组
const recursiveVisibleFields = (objArray, field) => {
  const result = []

  for (let obj of objArray) {
    if (obj.visible) {
      result.push(obj[field])
    }

    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result.push(...recursiveVisibleFields([obj[key]], field)) // 递归处理嵌套对象
      }
    }
  }

  return result
}

// 默认选中的项
const defaultCheckedKeyList = getDefaultCheckedKeyList()

// 根据字段值递归过滤元素
function recursiveFilter(objArray, typeKey, filterTypes) {
  return objArray.filter((obj) => {
    if (obj[typeKey] && filterTypes.includes(obj[typeKey])) {
      return false // 过滤满足条件的元素
    }

    // 给树节点添加唯一node-key
    if (obj._uniqueKey === undefined) {
      obj._uniqueKey = getNanoid()
    }

    // 设置默认显示全部字段
    if (obj.visible === undefined) {
      obj.visible = true
    }

    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        obj[key] = recursiveFilter(obj[key], filterTypes) // 递归处理嵌套对象
      }
    }

    return true // 保留不满足条件的元素
  })
}

// 节点点击的回调事件
const backNodeClick = (val) => {
  // 设置列的显示和隐藏
  console.log(val)
  val.visible = !val.visible
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

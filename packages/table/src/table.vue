<template>
  <div class="com-container" v-loading="loading" element-loading-text="数据加载中...">
    <table-tool-bar :columns="columns"></table-tool-bar>
    <el-table :data="data" v-bind="attrs" class="p-table">
      <table-column :columns="columns">
        <template
          v-for="(slotFun, slotName) in columnSlot"
          #[slotName]="{ row, column, columnIndex, $index }"
        >
          <slot
            :name="slotName"
            :row="row"
            :column="column"
            :columnIndex="columnIndex"
            :$index="$index"
          ></slot>
        </template>
      </table-column>
      <!-- <el-table-column v-for="(item, index) in columns" :key="item.prop" v-bind="item">
        <template v-if="$slots[item.slot]" #default="{ row, column, $index }">
          <slot
            v-if="$index !== -1"
            :name="item.slot"
            :row="row"
            :column="column"
            :columnIndex="index"
            :$index="$index"
          ></slot>
        </template>
        <template v-if="item.render" #default="{ row, column, $index }">
          <render-dom
            :render="item.render"
            :row="row"
            :column="column"
            :columnIndex="index"
            :$index="$index"
          ></render-dom>
        </template>
        <template v-if="$slots[item.headerSlot]" #header="{ column, $index }">
          <slot
            :name="item.headerSlot"
            :column="column"
            :columnIndex="index"
            :$index="$index"
          ></slot>
        </template>
      </el-table-column> -->
      <template v-if="$slots['default']" #default>
        <slot></slot>
      </template>
      <template v-if="$slots['append']" #append>
        <slot name="append"></slot>
      </template>
      <template v-if="!$slots['empty']" #empty>
        <p-empty empty-type="1"></p-empty>
      </template>
    </el-table>

    <!-- 分页组件 -->
    <el-pagination
      v-if="pageModel.isShow"
      v-model:current-page="pageModel.pageNo"
      v-model:page-size="pageModel.pageSize"
      :page-sizes="pageModel.pageSizes"
      :disabled="pageModel.disabled"
      :background="pageModel.background"
      :layout="pageModel.layout"
      :total="pageModel.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="p-pagination"
    >
    </el-pagination>
  </div>
</template>

<script setup name="p-table">
import { h, reactive, getCurrentInstance, onMounted, computed } from 'vue'
import { useExposeRef } from '@p-ui/hook'
import { deepAssign } from '@p-ui/utils'
import { useVModel } from '@vueuse/core'
import TableToolBar from './tableToolBar.vue'
import TableColumn from './tableColumn.vue'
/**
 @prop data | 显示的数据 | array | - | []
 @prop columns | table配置项 | Object | {} | {}
 */

const emit = defineEmits(['update:pageInfo', 'size-change', 'current-change'])

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  tableConfig: {
    type: Object,
    default: () => {}
  },
  pageInfo: {
    type: Object,
    default: () => {}
  },
  loading: {
    type: Boolean,
    default: false
  }
})

/** 当前组件实例 */
const { proxy } = getCurrentInstance()
console.log(proxy)

/** 合并透传属性 */
const attrs = computed(() => {
  return deepAssign(props.tableConfig, proxy.$attrs)
})

// table分页信息
const pageInfoModel = useVModel(props, 'pageInfo', emit)

// table分页默认的信息
const defaultPageModel = {
  isShow: true,
  pageSizes: [10, 20, 50, 100],
  disabled: false,
  background: true,
  layout: '->, total, prev, pager, next, sizes, jumper'
}

// 合并默认信息
const pageModel = computed(() => {
  return deepAssign(defaultPageModel, pageInfoModel.value)
})

const columnSlot = computed(() => {
  const slotObj = {}
  const ignoreArr = ['default', 'append', 'empty']
  for (const slotName in proxy.$slots) {
    const isAdd = ignoreArr.indexOf(slotName) === -1
    if (Object.hasOwnProperty.call(proxy.$slots, slotName) && isAdd) {
      slotObj[slotName] = proxy.$slots[slotName]
    }
  }
  console.log(slotObj)
  return slotObj
})

// 分页大小变化的事件
const handleSizeChange = (size) => {
  emit('size-change', size)
}

// 当前页变化的事件
const handleCurrentChange = (cur) => {
  emit('current-change', cur)
}

/** 抛出ref实例 */
onMounted(() => {
  // console.log(proxy)
  exposeObj = useExposeRef(proxy, exposeObj)
})

let exposeObj = reactive({})

defineExpose(exposeObj)

// render函数实现
const renderDom = (_, obj) => {
  return _.render(h, _)
}
</script>

<style scoped lang="scss">
.p-table {
  --el-table-header-bg-color: #e2e5eb;
  :deep(th.el-table__cell) {
    font-size: 14px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #16325c;
  }
}
.el-pagination {
  width: 100%;
  // justify-content: space-between;
}
.p-pagination {
  margin: 15px 0;
  :deep(.el-pagination__total) {
    font-size: 14px;
    font-family: PingFangSC-Regular-, PingFangSC-Regular;
    font-weight: normal;
    color: #16325c;
  }
  :deep(.el-pager li) {
    font-size: 14px;
    font-family: HelveticaNeue-, HelveticaNeue;
    font-weight: normal;
    color: #16325c;
    border-radius: 4px;
    border: 1px solid #a8b7c7;
    background-color: #fff;
  }
  :deep(.el-pager li.is-active) {
    border: none;
    background: #4c75ed;
  }
  :deep(.btn-prev) {
    margin-left: 8px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #a8b7c7;
  }
  :deep(.btn-next) {
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #a8b7c7;
  }
  :deep(.el-pagination__sizes) {
    margin-left: 12px;
  }
  :deep(.el-pagination__jump) {
    margin-left: 8px;
  }
}
</style>

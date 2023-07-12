<template>
  <div class="com-container">
    <el-table :data="data" v-bind="attrs" class="p-table">
      <el-table-column v-for="(item, index) in columns" :key="item.prop" v-bind="item">
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
        <template v-if="$slots[item.headerSlot]" #header="{ column, $index }">
          <slot
            :name="item.headerSlot"
            :column="column"
            :columnIndex="index"
            :$index="$index"
          ></slot>
        </template>
      </el-table-column>
      <template v-for="(slotFun, slotName) in $slots" #[slotName]>
        <slot v-if="$slots[slotName]" :name="slotName"></slot>
      </template>
      <template v-if="!$slots['empty']" #empty>
        <p-empty empty-type="1"></p-empty>
      </template>
    </el-table>

    <!-- 分页组件 -->
    <el-pagination
      v-model:current-page="pageInfoModel.pageNo"
      v-model:page-size="pageInfoModel.pageSize"
      :page-sizes="pageInfoModel.pageSizes || [10, 20, 50, 100]"
      :disabled="pageInfoModel.disabled || false"
      :background="pageInfoModel.background || true"
      :layout="pageInfoModel.layout || 'total, prev, pager, next, sizes, jumper, slot'"
      :total="pageInfoModel.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="p-pagination"
    >
    </el-pagination>
  </div>
</template>

<script setup name="p-table">
import { reactive, getCurrentInstance, onMounted, computed } from 'vue'
import { useExposeRef } from '@p-ui/hook'
import { deepAssign } from '@p-ui/utils'
import { useVModel } from '@vueuse/core'
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
  }
})

/** 当前组件实例 */
const { proxy } = getCurrentInstance()

/** 合并透传属性 */
const attrs = computed(() => {
  return deepAssign(props.tableConfig, proxy.$attrs)
})

// table分页信息
const pageInfoModel = useVModel(props, 'pageInfo', emit)

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
  console.log(proxy)
  exposeObj = useExposeRef(proxy, exposeObj)
})

let exposeObj = reactive({})

defineExpose(exposeObj)
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

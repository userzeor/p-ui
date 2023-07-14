<template>
  <template v-for="(item, index) in columns" :key="item.prop">
    <template v-if="item.children">
      <el-table-column v-if="item.visible" v-bind="filterNoUseAttr(item)">
        <el-table-column
          v-for="(kItem, KIndex) in item.children"
          :key="kItem.prop"
          v-bind="filterNoUseAttr(kItem)"
        >
          <table-column
            v-if="kItem.children[KIndex]?.children"
            :columns="kItem.children[KIndex]?.children"
          >
          </table-column>
          <template v-else>
            <el-table-column
              v-for="(jItem, jIndex) in kItem.children"
              :key="jItem.prop"
              v-bind="jItem"
            >
              <template v-if="$slots[jItem.slot]" #default="{ row, column, $index }">
                <slot
                  v-if="$index !== -1"
                  :name="jItem.slot"
                  :row="row"
                  :column="column"
                  :columnIndex="jIndex"
                  :$index="$index"
                ></slot>
              </template>
              <template v-if="jItem.render" #default="{ row, column, $index }">
                <render-dom
                  :render="jItem.render"
                  :row="row"
                  :column="column"
                  :columnIndex="jIndex"
                  :$index="$index"
                ></render-dom>
              </template>
              <template v-if="$slots[jItem.headerSlot]" #header="{ column, $index }">
                <slot
                  :name="jItem.headerSlot"
                  :column="column"
                  :columnIndex="jIndex"
                  :$index="$index"
                ></slot>
              </template>
            </el-table-column>
          </template>
        </el-table-column>
      </el-table-column>
    </template>
    <template v-else>
      <el-table-column v-if="item.visible" v-bind="item">
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
      </el-table-column>
    </template>
  </template>
</template>

<script setup name="tableColumn">
import { h, computed } from 'vue'
const props = defineProps({
  columns: {
    type: Object,
    default: () => {}
  }
})

const filterNoUseAttr = computed(() => {
  return (item) => {
    const newItemObj = { ...item }
    // 过滤el-table没有的属性
    const filterFieidArr = ['children']
    filterFieidArr.forEach((fName) => {
      delete newItemObj[fName]
    })
    return newItemObj
  }
})

// render函数实现
const renderDom = (_, obj) => {
  return _.render(h, _)
}
</script>
<style lang="scss" scoped></style>

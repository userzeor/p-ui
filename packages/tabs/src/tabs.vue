<template>
  <el-tabs v-model="activeName" class="demo-tabs" :type="tabType" @tab-click="handleClick">
    <div v-for="(item, index) in tabList" :key="index">
      <el-tab-pane :label="item.label" :name="item.name">
        <template #label v-if="item.dropdownMenu">
          <el-dropdown class="center" trigger="click" @command="setCommand">
            <span>
              {{ item.label }}
              <el-icon>
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="(items, indexs) in item.dropdownMenu"
                  :key="indexs"
                  :class="{ select: items.value === command }"
                  :command="items.value"
                  >{{ items.label }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>

        {{ item.name }}
        <slot :name="item.name"></slot>
      </el-tab-pane>
    </div>
  </el-tabs>
</template>
<script setup name="p-tabs">
import { computed } from 'vue'
const props = defineProps({
  tabList: {
    type: Array,
    default: () => []
  },
  activeName: {
    type: String,
    default: () => {}
  },
  tabType: {
    type: String,
    default: () => {}
  }
})

const emits = defineEmits(['backMessage'])

let command = 'person'

const activeName = computed(() => {
  return props.activeName
})

const setCommand = (val) => {
  command = val
  emits('backMessage', val)
}

const handleClick = (tab, event) => {
  emits('backMessage', tab.props.name)
}

/**
  @prop tabList | tabs配置参数 | arr | [{
         label: "",
        name: "",
        dropdownMenu:[]
    }] | []
  @prop label | tabs选项卡名称 | object | [] | []
  @prop dropdownMenu | tab下拉框内容 | arr | [{label:"",value:""}] | []
  @prop activeName | 默认选中框 | - | tabList[0].name | []
  @prop tabType | 风格类型 | string | card/border-card | —
 */
</script>
<style scoped lang="scss">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
:deep .select {
  background-color: #4c75ed;
  color: #fff;
  opacity: 0.5;
}
:deep .el-dropdown-menu__item {
  padding: 5px 20px;
}

:deep .is-scrollable {
  padding: 0px 30px;
}

:deep .el-tabs__nav-prev {
  width: 30px;
}

:deep .el-tabs__nav-next {
  width: 30px;
}

:deep .el-tabs__header .el-tabs__item.is-active {
  border-top: 3px solid #4c75ed;
}

// :deep .el-tabs__nav {
//   .is-active {
//     color: #4c75ed !important;
//   }
// }
// :deep .el-tabs__item {
//   &:hover {
//     background-color: #e7eaf2 !important;
//     color: #16325c !important;
//   }
// }
</style>

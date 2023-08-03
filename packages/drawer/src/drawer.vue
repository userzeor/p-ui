<template>
  <div>
    <el-drawer v-model="drawer" v-bind="$attrs" :before-close="handleClose">
      <template #header>
        <slot name="header"></slot>
      </template>
      <slot name="content"></slot>

      <template #footer>
        <slot name="footer"></slot>
      </template>
    </el-drawer>
  </div>
</template>

<script setup name="p-drawer">
import { computed } from 'vue'

const emits = defineEmits(['backVisible'])

const props = defineProps({
  drawerObject: {
    type: Object,
    default: () => {}
  }
})

const drawer = computed(() => {
  return props.drawerObject.drawerVisible
})

const handleClose = () => {
  emits('backVisible', drawer)
}

/**
    @prop drawerObject | 抽屉配置参数 | Object | {} | {}
    @prop drawerVisible | 抽屉是否显示 | boolean | true false| false
    @prop direction | Drawer 打开的方向 | Direction | rtl / ltr / ttb / btt | rtl
    @prop size | Drawer 窗体的大小 | Drawer 窗体的大小 | - | '30%'
    @slot #header | 抽屉title插槽 |
    @slot #content | 抽屉内容插槽 |
    @slot #footer | 抽屉footer插槽 |
 */
</script>

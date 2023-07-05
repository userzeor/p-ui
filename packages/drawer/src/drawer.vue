<template>
    <div>

    <el-drawer v-model="drawer" :direction="drawerObject.direction" :size="drawerObject.size" :before-close="handleClose" >
        <template #header>
            <slot name="header"></slot>
        </template>
        <slot name="content"></slot>

        <el-drawer
            v-model="innerDrawer"
            title="I'm inner Drawer"
            :append-to-body="true"
            :before-close="handleInnerClose"
            :size="drawerObject.innerDrawerSize"
        >
            <p>_(:зゝ∠)_</p>
        </el-drawer>

        <template #footer>
            <slot name="footer"></slot>
        </template>
    </el-drawer>
    </div>
</template>

<script setup name="p-drawer">
import { computed } from 'vue'

import { ElMessageBox } from 'element-plus'
const emits = defineEmits(['backInnerVisible', 'backVisible'])

const props = defineProps({
  drawerObject: {
    type: Object,
    default: () => {}
  }
})

const drawer = computed(() => {
  return props.drawerObject.drawerVisible
})

const innerDrawer = computed(() => {
  return props.drawerObject.innerDrawer
})

const handleClose = () => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      emits('backVisible', drawer)
    })
    .catch(() => {
      // catch error
    })
}

const handleInnerClose = () => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      emits('backInnerVisible', innerDrawer)
    })
    .catch(() => {
      // catch error
    })
}

/**
    @prop drawerObject | 抽屉配置参数 | Object | {} | {}
    @prop drawerVisible | 抽屉是否显示 | boolean | true false| false
    @prop direction | Drawer 打开的方向 | Direction | rtl / ltr / ttb / btt | rtl
    @prop size | Drawer 窗体的大小 | Drawer 窗体的大小 | - | '30%'
    @prop innerDrawer | 嵌套抽屉是否显示 | boolean | true / false | false
    @prop innerDrawerSize | 嵌套Drawer 窗体的大小 | 嵌套Drawer 窗体的大小 | - | '30%'
 */

</script>

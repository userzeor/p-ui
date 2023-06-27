<template>
  <el-button text @click="handleDialogs"> click to open the Dialog </el-button>
  <p-dialog
    @dialogClose="dialogCloseDef"
    @dialogSuccess="dialogSuccessDef"
    @dialogInnerSuccess="dialogInnerSuccessDef"
    @dialogInnerClose="dialogInnerCloseDef"
    :dialog-object="dialogObjDelDef"
  >
    <template #dialogContent>
      <div>我是弹框内容</div>
    </template>

    <template #innerDialogContent>
      <div>我是嵌套弹框内容</div>
    </template>
  </p-dialog>
</template>

<script setup>
import { reactive } from 'vue'

const handleDialogs = () => {
  dialogObjDelDef.dialogVisible = true
}

const dialogObjDelDef = reactive({
  dialogVisible: false,
  title: '弹框标题',
  width: 'big', // small,middle,big,fullScreen
  successBtnText: '确定',
  closeBtnText: '取消',
  draggable: true, // 是否可拖拽
  isFooter: true, // 是否显示按钮
  appendToBody: true, // 是否嵌套
  innerBtnText: '嵌套弹框',
  closeInnerBtnText: '取消',
  successInnerBtnText: '确定',
  innerDraggable: true // 嵌套弹框是否拖拽
})

// 关闭弹窗
const dialogCloseDef = () => {
  dialogObjDelDef.dialogVisible = false
}
// 确定
const dialogSuccessDef = () => {
  dialogObjDelDef.dialogVisible = false
}

const dialogInnerCloseDef = () => {}

const dialogInnerSuccessDef = () => {}
</script>

<style scoped lang="scss"></style>

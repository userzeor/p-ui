<template>
  <el-button
    text
    @click="handleDialogs"
  > click to open the Dialog </el-button>
  <p-dialog
    @dialogClose="dialogCloseDef"
    @dialogSuccess="dialogSuccessDef"
    :dialog-object="dialogObjDelDef"
  >
    <div>
      <div>我是弹框内容</div>
    </div>
  </p-dialog>
</template>

<script setup>
import { reactive } from 'vue'

const handleDialogs = () => {
  dialogObjDelDef.dialogVisible = true
}

const dialogObjDelDef = reactive({
  dialogVisible: false,
  title: '标题',
  width: 'small', // small,middle,big
  successBtnText: '确定',
  closeBtnText: '取消',
  draggable: true, // 是否可拖拽
  isFooter: true // 是否显示按钮
})

// 关闭弹窗
const dialogCloseDef = () => {
  dialogObjDelDef.dialogVisible = false
}
// 确定
const dialogSuccessDef = () => {
  dialogObjDelDef.dialogVisible = false
}
</script>

<style scoped lang="scss"></style>

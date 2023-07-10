<template>
  <el-button text @click="handleDialogs"> click to open the Dialog </el-button>
  <p-dialog
    @dialogClose="dialogCloseDef"
    @dialogSuccess="dialogSuccessDef"
    :dialog-object="dialogObjDelDef"

  >
    <template #dialogContent>
      <div>我是弹框内容</div>

      <el-dialog
          v-model="innerVisible"
          width="30%"
          title="嵌套弹框"
          append-to-body
          :before-close="handleinnerCloses"
          draggable
          custom-class="inner-dialogs"
          :modal='false'
          :close-on-click-modal="false"
          modal-class="innerModal"
        >
          <div class="innerContent">
            我是嵌套弹框内容
          </div>

          <div class="innerFooter">
            <span class="inner-dialog-footer" >

              <el-button @click="handleinnerCloses">
                取消
              </el-button>
               <el-button type="primary" @click="handleinnerSuccess" class="inner-btn">确定</el-button>
            </span>
          </div>
        </el-dialog>
    </template>

    <!-- <template #innerDialogContent>
      <div>我是嵌套弹框内容</div>
    </template> -->

    <template #footer>
        <span class="dialog-footer" >
          <el-button  @click="handleClose">取消</el-button>
          <el-button type="primary" @click="handleSuccess">
              确定
          </el-button>
          <el-button @click="handleInnerBtn" >
            嵌套弹框
          </el-button>
        </span>
    </template>
  </p-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'

const handleDialogs = () => {
  dialogObjDelDef.dialogVisible = true
}

const innerVisible = ref(false)

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

const handleClose = () => {
  innerVisible.value = false
  dialogObjDelDef.dialogVisible = false
}

const handleSuccess = () => {
  innerVisible.value = false
  dialogObjDelDef.dialogVisible = false
}

const handleInnerBtn = () => {
  innerVisible.value = true
}
const handleinnerCloses = () => {
  innerVisible.value = false
}

const handleinnerSuccess = () => {
  innerVisible.value = false
}
</script>

<style scoped lang="scss"></style>

<style lang="scss">
.inner-dialogs {
    pointer-events: auto;
  .el-dialog__header {
    background-color: #4c75ed;
    margin-right: 0px;
    text-align: center;
    padding: 16px;
    .el-dialog__title {
      color: #fff;
      font-weight: bold;
      letter-spacing: 5px;
    }
  }

  .el-dialog__body {
    padding: 0px;
  }
  .innerContent {
    padding: 20px;
  }
  .innerFooter {
    overflow: hidden;
    background-color: #f8fafe;
    padding: 16px;
    text-align: right;
  }
}

.innerModal{
    pointer-events: none;
}

</style>

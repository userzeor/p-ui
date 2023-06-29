<template>
  <div class="p-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="dialogData.title"
      :width="dialogData.width"
      :before-close="handleClose"
      :draggable="dialogData.draggable"
    >
      <div>
        <slot name="dialogContent"> </slot>
      </div>

      <!-- 嵌套弹框 -->
      <template v-if="dialogData.appendToBody">
        <el-dialog
          v-model="innerVisible"
          width="30%"
          title="嵌套弹框"
          append-to-body
          :before-close="handleinnerCloses"
          :draggable="dialogData.innerDraggable"
          custom-class="inner-dialogs"
        >
          <div class="innerContent">
            <slot name="innerDialogContent"> </slot>
          </div>

          <div class="innerFooter">
            <span class="inner-dialog-footer" v-if="dialogData.dialogIsFooter">
              <el-button type="primary" @click="handleinnerSuccess" class="inner-btn">{{
                dialogData.successInnerBtnText
              }}</el-button>
              <el-button @click="handleinnerCloses">
                {{ dialogData.closeInnerBtnText }}
              </el-button>
            </span>
          </div>
        </el-dialog>
      </template>

      <!-- 嵌套弹框 -->

      <template #footer>
        <span class="dialog-footer" v-if="dialogData.dialogIsFooter">
          <el-button @click="handleSuccess">
            {{ dialogData.closeBtnText }}
          </el-button>
          <el-button type="primary" @click="handleClose">{{ dialogData.successBtnText }}</el-button>
          <el-button @click="handleInnerBtn" v-if="dialogData.appendToBody">
            {{ dialogData.innerBtnText }}
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="p-dialog">
import { computed, ref } from 'vue'
const emits = defineEmits(['dialogSuccess', 'dialogClose'])
/**
    @prop dialogObjDelDef | dialog配置参数 | Object | {} | {}
    @prop dialogVisible | 是否显示 Dialog | boolean | true false | false
    @prop title | 标题 | string | - | -
    @prop width | Dialog 的宽度 | string | 'small','middle','big' | 'small'
    @prop successBtnText | 确定按钮名称 | string | - | '确定'
    @prop closeBtnText | 关闭按钮名称 | string | - | '取消'
    @prop draggable | 是否 可拖拽 | boolean | - | false
    @prop isFooter | 是否显示底部按钮 | boolean | - | true
    @prop appendToBody | 是否嵌套弹框 | boolean | - | true
    @prop innerBtnText | 嵌套弹框title | string | - | -
    @prop successInnerBtnText | 嵌套弹框确定按钮名称 | string | - | '确定'
    @prop closeInnerBtnText | 嵌套弹框取消按钮名称 | string | - | '取消'
    @prop innerDraggable | 嵌套弹框是否拖拽 | boolean | - | true
    @event dialogSuccessDef | 点击确定回调按钮 | function |
    @event dialogCloseDef | 点击取消回调按钮 | function |
    @event dialogInnerSuccessDef | 嵌套框确定回调按钮 | function |
    @event dialogInnerCloseDef | 嵌套框取消回调按钮 | function |
 */
const props = defineProps({
  dialogObject: {
    default() {
      return {}
    },
    type: Object
  }
})

const innerVisible = ref(false)

const handleInnerBtn = () => {
  innerVisible.value = true
}
const dialogVisible = computed(() => {
  return props.dialogObject.dialogVisible
})

const dialogData = {
  title: props.dialogObject.title || '标题',
  width:
    props.dialogObject.width === 'big'
      ? '1000'
      : props.dialogObject.width === 'middle'
        ? '720'
        : props.dialogObject.width === 'small'
          ? '560'
          : '100%',
  successBtnText: props.dialogObject.successBtnText || '确定',
  closeBtnText: props.dialogObject.closeBtnText || '取消',
  draggable: props.dialogObject.draggable || false,
  dialogIsFooter: props.dialogObject.isFooter,
  appendToBody: props.dialogObject.appendToBody,
  innerBtnText: props.dialogObject.innerBtnText,
  closeInnerBtnText: props.dialogObject.closeInnerBtnText,
  successInnerBtnText: props.dialogObject.successInnerBtnText,
  innerDraggable: props.dialogObject.innerDraggable
}

const handleClose = () => {
  emits('dialogClose', false)
}

const handleinnerCloses = () => {
  // 嵌套框关闭按钮
  innerVisible.value = false
}

const handleinnerSuccess = () => {
  // 嵌套框确定按钮
  innerVisible.value = false
}

const handleSuccess = () => {
  emits('dialogSuccess', false)
}
</script>

<style lang="scss" scoped>
.inner-dialog-footer {
  overflow: hidden;
  button {
    text-align: right;
    float: right;
  }
}
.inner-btn {
  margin: 0px 10px;
}

:deep .el-dialog__header {
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

:deep .el-dialog__close {
  color: #fff;
}

:deep .el-button--primar {
  background-color: #4c75ed;
}

:deep .el-dialog__footer {
  background-color: #f8fafe;
  padding: 16px;
}
</style>

<style lang="scss">
.inner-dialogs {
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
  }
}
</style>

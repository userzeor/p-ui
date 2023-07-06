<template>
  <div class="p-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="dialogData.title"
      :width="dialogData.width"
      :before-close="handleClose"
      :draggable="dialogData.draggable"
        :close-on-click-modal="false"
        :modal='false'
    >
      <div>
        <slot name="dialogContent"> </slot>
      </div>

      <template #footer>
         <slot name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="p-dialog">
import { computed } from 'vue'
const emits = defineEmits(['dialogSuccess', 'dialogClose'])
/**
    @prop dialogObjDelDef | dialog配置参数 | Object | {} | {}
    @prop dialogVisible | 是否显示 Dialog | boolean | true false | false
    @prop title | 标题 | string | - | -
    @prop width | Dialog 的宽度 | string | 'small','middle','big' | 'small'
    @prop draggable | 是否 可拖拽 | boolean | - | false

 */
const props = defineProps({
  dialogObject: {
    default() {
      return {}
    },
    type: Object
  }
})

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
  draggable: props.dialogObject.draggable || false

}

const handleClose = () => {
  emits('dialogClose', false)
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

:deep(.el-dialog__header) {
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

:deep(.el-button--primar) {
  background-color: #4c75ed;
}

:deep(.el-dialog__footer) {
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

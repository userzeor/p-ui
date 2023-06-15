<template>
  <div class="PDialog">
    <el-dialog
      v-model="dialogVisible"
      :title="dialogData.title"
      :width="dialogData.width"
      :before-close="handleClose"
      :draggable="dialogData.draggable"
    >
      <slot> </slot>
      <template #footer>
        <span
          class="dialog-footer"
          v-if="dialogData.dialogIsFooter"
        >
          <el-button
            type="primary"
            @click="handleClose"
          >{{ dialogData.successBtnText }}</el-button>
          <el-button @click="handleSuccess">
            {{ dialogData.closeBtnText }}
          </el-button>
        </span>
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
     @prop successBtnText | 确定按钮名称 | string | - | '确定'
     @prop closeBtnText | 关闭按钮名称 | string | - | '取消'
     @prop draggable | 是否 可拖拽 | boolean | - | false
     @prop isFooter | 是否显示底部按钮 | boolean | - | true
     @event dialogSuccessDef | 点击确定回调按钮 | function |
     @event dialogCloseDef | 点击取消回调按钮 | function |
 */
const props = defineProps({
  dialogObject: {
    default () {
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
        : '560',
  successBtnText: props.dialogObject.successBtnText || '确定',
  closeBtnText: props.dialogObject.closeBtnText || '取消',
  draggable: props.dialogObject.draggable || false,
  dialogIsFooter: props.dialogObject.isFooter
}

const handleClose = () => {
  emits('dialogClose', false)
}

const handleSuccess = () => {
  emits('dialogSuccess', false)
}
</script>

<style scoped lang="scss">
.p-dialog {
}
</style>

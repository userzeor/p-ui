<template>
  <div class="com-container" v-bind="itemConfig.props">
    <el-button type="primary" native-type="submit">提交</el-button>
    <!-- <el-button type="primary" native-type="submit" @click="submitForm()">提交</el-button> -->
    <el-button @click="resetForm()">重置</el-button>
  </div>
</template>

<script setup name="BtnGroup">
const emit = defineEmits(['submit'])
const props = defineProps({
  /** 传入的json的当前项的配置 */
  itemConfig: {
    type: Object,
    default: () => {}
  },
  /** 传入的form表单配置 */
  formConfig: {
    type: Object,
    default: () => {}
  },
  /** 父组件实例 */
  instance: {
    type: Object,
    default: () => {}
  }
})

/** 提交按钮事件 */
const submitForm = () => {
  const formEl = props.instance.$refs[props.formConfig.form?.ref]
  if (!formEl) return
  formEl.validate((valid) => {
    emit('submit', valid)
  })
}

/** 重置按钮事件 */
const resetForm = () => {
  const formEl = props.instance.$refs[props.formConfig.form?.ref]
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style lang="scss" scoped></style>

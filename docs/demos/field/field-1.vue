<template>
  <p-field
    :fieldObject="fieldObject"
    :fieldData="fieldData"
    @backTextMessage="backTextMessage"
  ></p-field>
</template>

<script setup>
import { reactive } from 'vue'
const fieldObject = reactive({
  type: 'field', // field text  editor
  labelWidth: '100px',
  labelPosition: 'left', // left  right top
  size: 'default', // large default small
  span: '6', // 24等分
  maxlength: 50, // 最大字数
  placeholder: '请输入',
  showWordLimit: true,
  textarea: '',
  rows: '5'
})

const fieldData = reactive([
  {
    label: '标题1',
    value: '内容1内容1内容1内容1内容1内容1'
  },
  {
    label: '标题2',
    value: '内容2'
  },
  {
    label: '标题3',
    value: '内容3'
  },
  {
    label: '标题4',
    value: '内容4'
  },
  {
    label: '标题5',
    value: '内容5'
  },
  {
    label: '标题6',
    value: '内容6'
  },
  {
    label: '标题7',
    value: '内容7'
  },
  {
    label: '标题8',
    value: '内容8'
  }
])

const backTextMessage = (val) => {
  console.log(val)
}
</script>

<style scoped lang="scss"></style>

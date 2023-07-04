<template>
  <p-quill-editor
    :quillObject="quillObject"
    :modelValue="modelValue"
    @backContent="backContent"
  ></p-quill-editor>
</template>

<script setup>
import { reactive } from 'vue'
const quillObject = reactive({
  readOnly: false,
  minHeight: 200,
  height: 400
})

const modelValue = '<p></p>'

const backContent = (val) => {
  console.log(val)
}
</script>

<style scoped lang="scss"></style>

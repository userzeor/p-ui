<template>
  <p-quill-editor
    :quillObject="quillObject"
    v-model="valueHtml"
    @backContent="backContent"
  ></p-quill-editor>
</template>

<script setup>
import { reactive, ref } from 'vue'
const quillObject = reactive({
  readOnly: false,
  minHeight: 200,
  height: 400
})

const valueHtml = ref('这是一首简单的小情歌')

const backContent = (val) => {
  console.log(val)
}
</script>

<style scoped lang="scss"></style>

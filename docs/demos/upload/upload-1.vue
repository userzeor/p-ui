<template>
  <p-upload :upload-object="uploadObject"></p-upload>
</template>

<script setup>
import { reactive } from 'vue'
const uploadObject = reactive({
  type: 'picture-card', // 'text' | 'picture' | 'picture-card',
  limit: 3,
  uploadUrl: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
  multiple: false,
  rawFileSize: 4,
  fileList: []
})
</script>

<style scoped lang="scss"></style>

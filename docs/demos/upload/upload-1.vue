<template>
  <p-upload :upload-object="uploadObject">

  </p-upload>
</template>

<script setup>
import { reactive } from 'vue'
const uploadObject = reactive({
  type: 'text', // 'text' | 'picture' | 'picture-card',
  limit: 3,
  uploadUrl: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
  multiple: false, // 是否支持多选文件
  rawFileSize: 4, // 上传文件最大值
  fileList: [
    {
      name: 'element-plus-logo.svg',
      url: 'https://element-plus.org/images/element-plus-logo.svg'
    },
    {
      name: 'element-plus-logo2.svg',
      url: 'https://element-plus.org/images/element-plus-logo.svg'
    }
  ],
  autoUpload: true, // 是否自动上传
  uploadBtnName: '上传'
})
</script>

<style scoped lang="scss"></style>

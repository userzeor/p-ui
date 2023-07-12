<template>
  <p-upload
    :upload-object="uploadObject"
    @successMessage="successMessage"
    @uploadRef="uploadRef"
  >

  </p-upload>
  <el-button @click="handleUpload">上传</el-button>
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
    // {
    //   name: 'element-plus-logo.svg',
    //   url: 'https://element-plus.org/images/element-plus-logo.svg'
    // },
    // {
    //   name: 'element-plus-logo2.svg',
    //   url: 'https://element-plus.org/images/element-plus-logo.svg'
    // }
  ],
  autoUpload: false, // 是否自动上传
  drag: false, // 是否拖拽
  accept: '.xlsx, .xls', // 接受上传的文件类型
  headers: '', // 上传头部
  cleanFile: false // 清空上传文件
})

let upRef = null
// 上传成功的回调
const successMessage = (res, uploadFile, uploadFiles) => {
  console.log(res, uploadFile, uploadFiles, 1111)
}

const uploadRef = (val) => {
  upRef = val
}

const handleUpload = () => {
  upRef.value.submit()
}

</script>

<style scoped lang="scss"></style>

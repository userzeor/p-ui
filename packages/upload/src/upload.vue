<template>
  <div>
    <el-upload
      ref="uploadRef"
      v-model:file-list="fileList"
      :class="{ hide: hideUpload }"
      :action="uploadObject.uploadUrl"
      :multiple="uploadObject.multiple || false"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="uploadObject.limit"
      :on-exceed="handleExceed"
      :before-upload="beforeAvatarUpload"
      :list-type="uploadObject.type"
      :auto-upload="uploadObject.autoUpload"
      :drag="uploadObject.drag"
      :accept="uploadObject.accept"
      :headers="uploadObject.headers"
      :on-success="handleFileSuccess"
    >
      <el-icon
        class="avatar-uploader-icon"
        v-if="uploadObject.type === 'picture-card'"
      >
        <Plus />
      </el-icon>
      <div v-else-if="uploadObject.drag">
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          将文件拖到此处或 <em>点击上传</em>
        </div>
      </div>

      <el-button
        v-else
        type="primary"
      >上传</el-button>

    </el-upload>

    <el-button
      class="ml-3"
      type="success"
      @click="submitUpload"
      v-if="!uploadObject.autoUpload"
    >
      {{uploadObject.uploadBtnName}}
    </el-button>

    <el-dialog v-model="dialogVisible">
      <img
        w-full
        :src="dialogImageUrl"
        alt="Preview Image"
      />
    </el-dialog>

  </div>
</template>

<script setup name="p-upload">
import { computed, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const props = defineProps({
  uploadObject: {
    type: Object,
    default: () => { }
  }
})
const emits = defineEmits(['successMessage'])
const fileList = computed(() => {
  return props.uploadObject.fileList
})

const hideUpload = computed(() => {
  return fileList.value.length >= props.uploadObject.limit
})

const handleRemove = (file, uploadFiles) => {
  // 文件列表移除文件时的钩子
  console.log(file, uploadFiles)
}

const handlePreview = (uploadFile) => {
  // 点击文件列表中已上传的文件时的钩子
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}

const handleExceed = (files, uploadFiles) => {
  // 超出限制时执行的钩子函数
  ElMessage.warning('上传图片的最大张数超过了限制')
}

const beforeRemove = (uploadFile, uploadFiles) => {
  // 删除文件之前的钩子
  if (uploadFile && uploadFile.status === 'success') {
    // 解决beforeAvatarUpload会触发 beforeRemove的问题
    return ElMessageBox.confirm('确定删除这张图片吗?').then(
      () => true,
      () => false
    )
  }
}

const beforeAvatarUpload = (rawFile) => {
  //   if (rawFile.type !== 'image/jpeg') {
  //     ElMessage.error('Avatar picture must be JPG format!')
  //     return false
  //   }
  if (rawFile.size / 1024 / 1024 > props.uploadObject.rawFileSize) {
    ElMessage.error(`上传的图片超过了${props.uploadObject.rawFileSize}M !`)
    return false
  }
  return true
}

const uploadRef = ref('uploadRef')
const submitUpload = () => {
  uploadRef.value.submit()
}

const handleFileSuccess = (res, uploadFile, uploadFiles) => {
  emits('successMessage', res, uploadFile, uploadFiles)
}

/**
    @prop uploadObject | upload配置参数 | Object | {} | {}
    @prop type | 文件列表的类型 | 'text''picture''picture-card' | 'text' |
    @prop limit | 允许上传文件的最大数量 | number | - | 否
    @prop limit | 允许上传文件的最大数量 | number | - | 否
    @prop uploadUrl | 请求 URL | string | - | 是
    @prop fileList | 默认上传文件 | [] | [] | 否
    @prop autoUpload | 是否自动上传 | boolean | - | 否
    @prop uploadBtnName | 上传按钮名 | string | - | - |

 */
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style scoped lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.hide {
  :deep(.el-upload--picture-card) {
    display: none;
  }
}
</style>

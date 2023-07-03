<template>
  <div>
    <QuillEditor
            :options="options"
            :style="styles"
            v-model:content="content"
            contentType="html"
            @textChange="handleTextChange"
         />
  </div>
</template>

<script setup name="p-quill-editor">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { reactive, watch, ref, computed } from 'vue'
const emits = defineEmits(['backContent'])
const props = defineProps({
  /* 编辑器的内容 */
  modelValue: {
    default() {
      return {}
    },
    type: String
  },
  quillObject: {
    default() {
      return {}
    },
    type: Object
  }
})
const content = ref('')

watch(
  () => props.modelValue,
  (v) => {
    content.value = v
  },
  { immediate: true }
)

const options = reactive({
  theme: 'snow',
  bounds: document.body,
  readOnly: props.quillObject.readOnly,
  debug: 'warn',
  modules: {
    // 工具栏配置
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
      ['blockquote', 'code-block'], // 引用  代码块
      [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
      [{ indent: '-1' }, { indent: '+1' }], // 缩进
      [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
      [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
      [{ align: [] }], // 对齐方式
      ['clean'], // 清除文本格式
      ['link', 'image', 'video'] // 链接、图片、视频
    ]
  },
  placeholder: '请输入内容'
})

const styles = computed(() => {
  const style = {}
  if (props.quillObject.minHeight) {
    style.minHeight = `${props.quillObject.minHeight}px`
  }
  if (props.quillObject.height) {
    style.height = `${props.quillObject.height}px`
  }
  return style
})

const handleTextChange = () => {
  emits('backContent', content.value)
}
</script>

<style scoped lang="scss">
.p-quill-editor {
}
</style>

import QuillEditor from './src/quill-editor.vue'

QuillEditor.name = 'p-quill-editor'

QuillEditor.install = (app) => {
  // 注册组件
  app.component(QuillEditor.name, QuillEditor)
}

export default QuillEditor

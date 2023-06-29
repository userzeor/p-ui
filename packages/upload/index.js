import Upload from './src/upload.vue'

Upload.name = 'p-upload'

Upload.install = (app) => {
  // 注册组件
  app.component(Upload.name, Upload)
}

export default Upload

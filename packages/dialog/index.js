import Dialog from './src/dialog.vue'

Dialog.name = 'p-dialog'

Dialog.install = (app) => {
  // 注册组件
  app.component(Dialog.name, Dialog)
}

export default Dialog

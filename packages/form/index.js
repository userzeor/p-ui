import Form from './src/form.vue'

Form.name = 'p-form'

Form.install = (app) => {
  // 注册组件
  app.component(Form.name, Form)
}

export default Form

import Form from '@p-ui/form'
import Foo from '@p-ui/foo'
import '../scss/index.scss'

const components = [Foo, Form] // components

// 全局动态添加组件
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}

import Tabs from '@p-ui/tabs'
import Dialog from '@p-ui/dialog'
import Table from '@p-ui/table'
import Form from '@p-ui/form'
import Foo from '@p-ui/foo'
import '../scss/index.scss'

const components = [Foo, Form, Table, Dialog, Tabs] // components

// 全局动态添加组件
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}

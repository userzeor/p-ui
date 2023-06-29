import Dialog from '@p-ui/dialog'
import Foo from '@p-ui/foo'
import Form from '@p-ui/form'
import Table from '@p-ui/table'
import Tabs from '@p-ui/tabs'
import Tree from '@p-ui/tree'
import Field from '@p-ui/field'
// import component end
import '../scss/index.scss'

const components = [Foo, Form, Table, Dialog, Tabs, Tree, Field] // components

// 全局动态添加组件
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}

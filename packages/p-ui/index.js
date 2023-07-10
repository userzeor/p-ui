import Dialog from '@p-ui/dialog'
import Field from '@p-ui/field'
import Foo from '@p-ui/foo'
import Form from '@p-ui/form'
import Table from '@p-ui/table'
import Tabs from '@p-ui/tabs'
import Tree from '@p-ui/tree'
import Upload from '@p-ui/upload'
// import QuillEditor from '@p-ui/quill-editor'
// import Echarts from '@p-ui/echarts'
import Empty from '@p-ui/empty'
import Card from '@p-ui/card'
import Steps from '@p-ui/steps'
import Drawer from '@p-ui/drawer'
// import component end
import '../scss/index.scss'
// 注册指令
import directives from '@p-ui/directive'

const components = [
  Foo,
  Form,
  Table,
  Dialog,
  Tabs,
  Tree,
  Field,
  Upload,
  // QuillEditor,
  // Echarts,
  Empty,
  Card,
  Steps,
  Drawer
] // components

// 全局动态添加组件
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  // 全局动态注册指令
  directives.forEach((directive) => {
    for (const key in directive) {
      if (Object.hasOwnProperty.call(directive, key)) {
        const val = directive[key]
        app.directive(key, val)
      }
    }
  })
}

export default {
  install
}

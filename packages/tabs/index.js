import Tabs from './src/tabs.vue'

Tabs.name = 'p-tabs'

Tabs.install = (app) => {
  // 注册组件
  app.component(Tabs.name, Tabs)
}

export default Tabs

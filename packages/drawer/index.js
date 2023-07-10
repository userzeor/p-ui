import Drawer from './src/drawer.vue'

Drawer.name = 'p-drawer'

Drawer.install = (app) => {
  // 注册组件
  app.component(Drawer.name, Drawer)
}

export default Drawer

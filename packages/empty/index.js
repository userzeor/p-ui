import Empty from './src/empty.vue'

Empty.name = 'p-empty'

Empty.install = (app) => {
  // 注册组件
  app.component(Empty.name, Empty)
}

export default Empty

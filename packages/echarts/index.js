import Echarts from './src/echarts.vue'

Echarts.name = 'p-echarts'

Echarts.install = (app) => {
  // 注册组件
  app.component(Echarts.name, Echarts)
}

export default Echarts

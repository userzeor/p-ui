import Steps from './src/steps.vue'

Steps.name = 'p-steps'

Steps.install = (app) => {
  // 注册组件
  app.component(Steps.name, Steps)
}

export default Steps

import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import PUI from '@p-ui/p-ui'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(ElementPlus)
    ctx.app.use(PUI)
    ctx.app.component('demo-preview', AntDesignContainer)
  }
}

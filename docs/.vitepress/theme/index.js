import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import PUI from '@p-ui/p-ui'

import './styles/vars.css'
import HomeSponsors from './components/HomeSponsors.vue'
import AsideSponsors from './components/AsideSponsors.vue'
import SvgImage from './components/SvgImage.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(HomeSponsors)
      // 'aside-ads-before': () => h(AsideSponsors)
    })
  },
  enhanceApp(ctx) {
    ctx.app.use(ElementPlus)
    ctx.app.use(PUI)
    ctx.app.component('demo-preview', AntDesignContainer)
    ctx.app.component('SvgImage', SvgImage)
  }
}

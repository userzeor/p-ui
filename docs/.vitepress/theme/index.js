import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import PUI from '@p-ui/p-ui'

import './styles/vars.css'
import './styles/doc.css'
// import HomeSponsors from './components/HomeSponsors.vue'
// import AsideSponsors from './components/AsideSponsors.vue'
import SvgImage from './components/SvgImage.vue'
import elementIcons from './components/SvgIcon/svgicon'

export default {
  ...DefaultTheme,
  Layout() {
    const props = {}
    // 获取 frontmatter
    const { frontmatter } = useData()
    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(DefaultTheme.Layout, props, {
      // 'home-features-after': () => h(HomeSponsors)
      // 'aside-ads-before': () => h(AsideSponsors)
    })
  },
  enhanceApp(ctx) {
    ctx.app.use(ElementPlus, {
      locale: locale
    })
    ctx.app.use(PUI)
    ctx.app.use(elementIcons)
    ctx.app.component('demo-preview', AntDesignContainer)
    ctx.app.component('SvgImage', SvgImage)
  }
}

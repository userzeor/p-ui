import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { components } from '../components'

const nav = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/foo' }
]

const sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' }
      ]
    }
  ],
  '/components': [
    {
      items: [...components]
    }
  ]
}

export default defineConfig({
  title: 'p-ui',
  description: 'Vue3中后台组件库',
  lang: 'zh-CN',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'p-ui',
    outline: 3,
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    nav,
    sidebar,
    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:en']
      }
    },
    lastUpdatedText: '最后更新时间'
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})

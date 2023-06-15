/**
 * .vue 文件模板
 */
export const sfcTemplate = (lineNameWithPrefix, lowCamelName) => {
  return `<template>
            <div>
              ${lineNameWithPrefix}
            </div>
          </template>

          <script setup name="${lineNameWithPrefix}">

          defineProps({})
          </script>

          <style scoped lang="scss">
          .${lineNameWithPrefix} {
          }
          </style>
        `
}

/**
 * .jsx 文件模板
 */
export const jsxTemplate = (lineNameWithPrefix, lowCamelName) => {
  return `import { defineComponent } from 'vue'

          const NAME = '${lineNameWithPrefix}'

          export default defineComponent({
            name: NAME,
            props: ${lowCamelName}Props,
            setup (props, context) {
              console.log(props, context)
              return () => (
                <div class={NAME}>
                  <div>
                    ${lineNameWithPrefix}
                  </div>
                </div>
              )
            }
          })
        `
}

/**
 * 组件入口 index.js 文件模板
 */
export const indexTemplate = (componentInfo) => {
  const { upCamelName, lineName, lineNameWithPrefix, type } = componentInfo

  return `import ${upCamelName} from './src/${type === 'jsx' ? lineName : lineName + '.' + type}'
          ${type === 'vue' ? `\n${upCamelName}.name = '${lineNameWithPrefix}'\n` : ''}
          ${upCamelName}.install = (app) => {
            // 注册组件
            app.component(${upCamelName}.name, ${upCamelName})
          }

          export default ${upCamelName}
        `
}

/**
 * scss 文件模板
 */
export const scssTemplate = (lineNameWithPrefix) => {
  return `@import "../tools";
          @import "../acss/mp";
          @import "../base/var.module";

          @include b('${lineNameWithPrefix}') {
          }
        `
}

/**
 * md 文件模板
 */
export const mdTemplate = (componentInfo) => {
  return `
# ${componentInfo.upCamelName} ${componentInfo.zhName}

## 基本使用

<preview path="../demos/${componentInfo.lineName}/${componentInfo.lineName}-1.vue" title="基本使用" description=" "></preview>

## ${componentInfo.upCamelName}组件 API

### ${componentInfo.upCamelName} Attributes 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
|  |  |  |  | |

### ${componentInfo.upCamelName} Methods 方法

| 方法名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |


### ${componentInfo.upCamelName} Events 事件

| 事件名 | 说明 | 类型 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### ${componentInfo.upCamelName} Exposes 抛出

| 名称 | 说明 | 类型 |
|  ----  | ----  | ----  |
|  |  |  |

### ${componentInfo.upCamelName} Slots 插槽

| 插槽名 | 说明 | 返回值 |
|  ----  | ----  | ----  |
|  |  |  |
`
}

/**
 * 组件文档demo 文件模板
 */
export const demoTemplate = (lineNameWithPrefix) => {
  return `<template>
            <${lineNameWithPrefix}></${lineNameWithPrefix}>
          </template>

          <script setup>
          </script>

          <style scoped lang="scss">
          </style>
        `
}

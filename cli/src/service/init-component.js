import fs from 'fs'
import * as path from 'path'
import { indexTemplate, sfcTemplate, jsxTemplate } from '../util/template-utils.js'
import { g } from '../util/log-utils.js'
import { execCmd } from '../util/cmd-utils.js'
import { Config } from '../config.js'
/**
 * 创建组件目录及文件
 */
export const initComponent = (componentInfo) =>
  new Promise((resolve, reject) => {
    if (fs.existsSync(componentInfo.fullPath)) {
      return reject(new Error('组件已存在'))
    }

    // 1. 创建组件根目录
    fs.mkdirSync(componentInfo.fullPath)

    // 2. 初始化 package.json
    execCmd(`cd ${componentInfo.fullPath} && pnpm init`)
      .then((r) => {
        // 3. 修改 package.json
        updatePackageJson(componentInfo)

        // 4. 安装 utils 依赖
        execCmd(`cd ${componentInfo.fullPath} && pnpm install @${Config.COMPONENT_LIB_NAME}/utils`)

        // 5. 创建组件 src 目录
        fs.mkdirSync(path.resolve(componentInfo.fullPath, 'src'))

        // 6. 创建 src/xxx.vue 或s src/xxx.tsx
        createSrcIndex(componentInfo)

        // 7. 创建 index.ts
        createIndex(componentInfo)

        g('component init success')

        return resolve(componentInfo)
      })
      .catch((e) => {
        return reject(e)
      })
  })

const updatePackageJson = (componentInfo) => {
  const { lineName, fullPath, nameWithLib } = componentInfo
  const packageJsonPath = `${fullPath}/package.json`
  if (fs.existsSync(packageJsonPath)) {
    let content = fs.readFileSync(packageJsonPath).toString()
    content = content.replace(lineName, nameWithLib)
    fs.writeFileSync(packageJsonPath, content)
  }
}

const createSrcIndex = (componentInfo) => {
  let content = ''
  if (componentInfo.type === 'vue') {
    content = sfcTemplate(componentInfo.lineNameWithPrefix, componentInfo.lowCamelName)
  } else {
    content = jsxTemplate(componentInfo.lineNameWithPrefix, componentInfo.lowCamelName)
  }
  const fileFullName = `${componentInfo.fullPath}/src/${componentInfo.lineName}.${componentInfo.type}`
  fs.writeFileSync(fileFullName, content)
}

const createIndex = (componentInfo) => {
  fs.writeFileSync(`${componentInfo.fullPath}/index.ts`, indexTemplate(componentInfo))
}

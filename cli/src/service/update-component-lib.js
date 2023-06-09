import { execCmd } from '../util/cmd-utils.js'
import path from 'path'
import { Config } from '../config.js'
import fs from 'fs'
import { g } from '../util/log-utils.js'

const updateComponentLibIndex = (libPath, componentInfo) => {
  const indexPath = path.join(libPath, 'index.js')
  const content = fs.readFileSync(indexPath).toString()

  const index1 = content.indexOf('// import component end')
  const index2 = content.indexOf('] // components')

  const result =
    `${content.substring(0, index1)}` +
    `import ${componentInfo.upCamelName} from '${componentInfo.nameWithLib}'\n` +
    content.substring(index1, index2 - 1) +
    `,\n  ${componentInfo.upCamelName}\n` +
    content.substring(index2)

  fs.writeFileSync(indexPath, result)
}

/**
 * 更新组件库入口
 */
export const updateComponentLib = async (componentInfo) => {
  // 组件库入口的路径
  const libPath = path.resolve(componentInfo.parentPath, Config.COMPONENT_LIB_NAME)

  // 1. 添加新创建的组件到依赖中
  await execCmd(`cd ${libPath} && pnpm install ${componentInfo.nameWithLib}`)

  // 2. 更新入口 index.js
  updateComponentLibIndex(libPath, componentInfo)

  g('component library update success')
}

import * as path from 'path'
import { convertToLine, convertToLowCamelName, convertToUpCamelName } from '../util/name-utils.js'
import { Config } from '../config.js'

// 最新 node 核心包的导入写法
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
// 获取 __filename 的 ESM 写法
// const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))

export class ComponentInfo {
  /** 中划线分隔的名称，如：nav-bar */
  lineName
  /** 中划线分隔的名称（带组件前缀） 如：p-nav-bar */
  lineNameWithPrefix
  /** 首字母小写的驼峰名 如：navBar */
  lowCamelName
  /** 首字母大写的驼峰名 如：NavBar */
  upCamelName
  /** 组件中文名 如：左侧导航 */
  zhName
  /** 组件类型 如：jsx */
  type
  /** packages 目录所在的路径 */
  parentPath
  /** 组件所在的路径 */
  fullPath
  /** 组件的前缀 如：p */
  prefix
  /** 组件全名 如：@p-ui/xxx */
  nameWithLib

  constructor(componentName, description, componentType) {
    this.prefix = Config.COMPONENT_PREFIX
    this.lineName = convertToLine(componentName)
    this.lineNameWithPrefix = `${this.prefix}-${this.lineName}`
    this.upCamelName = convertToUpCamelName(this.lineName)
    this.lowCamelName = convertToLowCamelName(this.upCamelName)
    this.zhName = description
    this.type = componentType === 'vue' ? 'vue' : 'jsx'
    this.parentPath = path.resolve(__dirname, '../../../packages')
    this.fullPath = path.resolve(this.parentPath, this.lineName)
    this.nameWithLib = `@${Config.COMPONENT_LIB_NAME}/${this.lineName}`
  }
}

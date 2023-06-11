import path from 'path'
import fs from 'fs'
import inquirer from 'inquirer'
import { closeLoading, showLoading } from '../util/loading-utils.js'
import { r, g } from '../util/log-utils.js'

// 交互提示
const questions = [
  {
    name: 'mdPath',
    message: '请输入要更新的组件文档文件的名称: ',
    default: ''
  }
]

// 获取组件的内容
const getTemplateStr = (componentName) => {
  const indexPath = path.resolve(`../packages/${componentName}`, `src/${componentName}.vue`)
  const content = fs.readFileSync(indexPath).toString()

  return content
}

// 获取文档的内容
const getMdStr = (mdName) => {
  const indexPath = path.resolve('../docs/components', mdName + '.md')
  const content = fs.readFileSync(indexPath).toString()

  return content
}

// 写入新的md内容
const writeNewMd = (mdName, result) => {
  const indexPath = path.resolve('../docs/components', mdName + '.md')
  fs.writeFileSync(indexPath, result)
}

const updateCompoentMd = (mdPath) => {
  showLoading('Generating, please wait...')
  try {
    // 1. 获取md文件的内容
    const mdContent = getMdStr(mdPath)
    // 2. 获取vue文件的内容
    const templateStr = getTemplateStr(mdPath)
    // 3. 获取文件中的注释
    // 获取整个注释的内容块
    const allNoteStr = templateStr.match(/(?<=\/\*\*)(.|\s)*?(?=\*\/)/g)[0]
    // 获取prop属性的注释
    const matePropStrArr = allNoteStr.match(/(?<=@prop)(.|\s)*?(?=@|.*$)/g)
    const propHeaderText = `
  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- | ---- | ---- | ------ | ------ |
  `
    const propStr = generateMdText(propHeaderText, matePropStrArr)
    // 获取method方法的注释
    const mateMethodStrArr = allNoteStr.match(/(?<=@method)(.|\s)*?(?=@|.*$)/g)
    const methodHeaderText = `
  | 方法名 | 说明 | 参数 | 返回值 |
  | ------ | ---- | ---- | ------ |
  `
    const methodStr = generateMdText(methodHeaderText, mateMethodStrArr)
    // 获取event事件的注释
    const mateEventStrArr = allNoteStr.match(/(?<=@event)(.|\s)*?(?=@|.*$)/g)
    const eventHeaderText = `
  | 事件名 | 说明 | 参数 | 返回值 |
  | ------ | ---- | ---- | ------ |
  `
    const eventStr = generateMdText(eventHeaderText, mateEventStrArr)
    // 获取exposes抛出的注释
    const mateExposesStrArr = allNoteStr.match(/(?<=@exposes)(.|\s)*?(?=@|.*$)/g)
    const exposesHeaderText = `
  | 名称 | 说明 | 类型 |
  |  ----  | ----  | ----  |
  `
    const exposesStr = generateMdText(exposesHeaderText, mateExposesStrArr)
    // 获取slot插槽的注释
    const mateSlotStrArr = allNoteStr.match(/(?<=@slot)(.|\s)*?(?=@|.*$)/g)
    const slotHeaderText = `
  | 插槽名 | 说明 | 参数 |
  | ------ | ---- | ---- |
  `
    const slotStr = generateMdText(slotHeaderText, mateSlotStrArr)

    // 4. 更新替换成新的内容
    const newMdContent = mdContent
      .replace(/(?<=属性)(.|\s)*?(?=###)/g, propStr)
      .replace(/(?<=方法)(.|\s)*?(?=###)/g, methodStr)
      .replace(/(?<=事件)(.|\s)*?(?=###)/g, eventStr)
      .replace(/(?<=抛出)(.|\s)*?(?=###)/g, exposesStr)
      .replace(/(?<=插槽)(.|\s)*?(?=.*$)/g, slotStr)

    // 5. 写入新的md内容
    writeNewMd(mdPath, newMdContent)

    closeLoading()

    g(`${mdPath}组件文档 update done!`)
  } catch (error) {
    closeLoading()
    r(error.message)
  }
}

const generateMdText = (mdHeaderText, mateMdStrArr) => {
  let mdStr = mdHeaderText

  const replacePropStrArr = mateMdStrArr?.map((val) => {
    return val.replaceAll(/^\s+|\s+$/g, '')
  })

  replacePropStrArr?.forEach((val) => {
    const propParmasList = val.split('|')
    const lastforIndex = propParmasList.length - 1
    propParmasList.forEach((item, i) => {
      const itemText = item.replace(/\n/g, '<br/>')
      if (i === lastforIndex) {
        mdStr += `| ${itemText} |`
      } else {
        mdStr += `| ${itemText} `
      }
    })
    mdStr += '\n'
  })

  return mdStr
}

export const updateMd = () => {
  inquirer.prompt(questions).then(({ mdPath }) => {
    updateCompoentMd(mdPath)
  })
}

updateMd()
// updateCompoentMd()

// /\/\/ @prop(.|\s)*?\/\/ end/g
// val.replaceAll(/\/\/ @prop|\/\/ end|\n/g, '').replaceAll(/^\s+|\s+$/g, '')

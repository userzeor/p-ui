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
  | <div style="width: 100px">属性名</div> | 说明 | <div style="width: 100px">类型</div> | <div style="width: 100px">可选值</div> | <div style="width: 100px">默认值</div> |
  | ---- | ---- | ---- | ------ | ------ |
  `
    const propStr = generateMdText(propHeaderText, matePropStrArr)
    // 获取method方法的注释
    const mateMethodStrArr = allNoteStr.match(/(?<=@method)(.|\s)*?(?=@|.*$)/g)
    const methodHeaderText = `
  | <div style="width: 100px">方法名</div> | 说明 | <div style="width: 100px">参数</div> | <div style="width: 100px">返回值</div> |
  | ------ | ---- | ---- | ------ |
  `
    const methodStr = generateMdText(methodHeaderText, mateMethodStrArr)
    // 获取event事件的注释
    const mateEventStrArr = allNoteStr.match(/(?<=@event)(.|\s)*?(?=@|.*$)/g)
    const eventHeaderText = `
  | <div style="width: 100px">事件名</div> | 说明 | <div style="width: 100px">类型</div> | <div style="width: 100px">返回值</div> |
  | ------ | ---- | ---- | ------ |
  `
    const eventStr = generateMdText(eventHeaderText, mateEventStrArr)
    // 获取exposes抛出的注释
    const mateExposesStrArr = allNoteStr.match(/(?<=@exposes)(.|\s)*?(?=@|.*$)/g)
    const exposesHeaderText = `
  | <div style="width: 100px">名称</div> | 说明 | <div style="width: 100px">类型</div> |
  |  ----  | ----  | ----  |
  `
    const exposesStr = generateMdText(exposesHeaderText, mateExposesStrArr)
    // 获取slot插槽的注释
    const mateSlotStrArr = allNoteStr.match(/(?<=@slot)(.|\s)*?(?=@|.*$)/g)
    const slotHeaderText = `
  | <div style="width: 100px">插槽名</div> | 说明 | <div style="width: 100px">返回值</div> |
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
      // 对json数据做格式化处理
      const a = item
      const itemText =
        // '<pre>' +
        item
          .replace(/\n/g, '<br/>')
          .replace(/[\r\n]/g, '')
          .replace(/(<)?^\s*\{[\s\S]*\}\s*$(>)?/g, function (match, p1, p2) {
            console.log(match)
            return (
              (p1 ? p1 : '') +
              '<pre>' +
              JSON.stringify(match, null, 4).replace(/^\"|\"$/g, '') +
              '</pre>' +
              (p2 ? p2 : '')
            )
          })
      // .replace(/\n/g, '<br/>')
      // .replace(/\{.*?\}/g, function (match) {
      //   const jsonObject = JSON.parse(match)
      //   console.log(jsonObject)
      //   return '`' + JSON.stringify(jsonObject, null, 4) + '`'
      // })
      // '</pre>'
      // .replace(/[\r\n]/g, '')
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

import path from 'path'
import fs from 'fs'
import inquirer from 'inquirer'
import { closeLoading, showLoading } from '../util/loading-utils.js'
import { r, g } from '../util/log-utils.js'

const entryDir = path.resolve(`../packages/utils`, `src`)

// 交互提示
const questions = [
  {
    type: 'confirm',
    name: 'choice',
    message: '是否全量更新工具函数文档:',
    default: false
  }
]

const questions2 = [
  {
    name: 'handle',
    message: '请输入要更新的工具函数的名称: ',
    default: ''
  }
]

// 取方法名，去除文件后缀名
const getFunName = (name) => {
  return name.replace(/(.*\/)*([^.]+).*/gi, '$2')
}

const getHandleNameList = () => {
  // 获取组件名称组成的数组
  const funs = fs.readdirSync(entryDir).filter((name) => {
    const funDir = path.resolve(entryDir, name)
    const isDir = fs.lstatSync(funDir).isDirectory()
    if (isDir) {
      return fs.readdirSync(funDir).includes(`${name}.js`)
    } else {
      return true
    }
  })
  return funs
}

// 获取函数的内容
const getTemplateStr = (handleName) => {
  const indexPath = path.resolve(`../packages/utils`, `src/${handleName}.js`)
  const content = fs.readFileSync(indexPath).toString()

  return content
}

// 获取文档的内容
const getMdStr = () => {
  const indexPath = path.resolve('../docs/guide', 'jsUtils.md')
  const content = fs.readFileSync(indexPath).toString()

  return content
}

// 写入新的md内容
const writeNewMd = (result) => {
  const indexPath = path.resolve('../docs/guide', 'jsUtils.md')
  fs.writeFileSync(indexPath, result)
}

const generateDescMdText = (descStr) => {
  if (descStr && descStr.length > 0) {
    return descStr[0]?.replace(/[\n]/g, '')
  } else {
    return ''
  }
}

const generateParamMdText = (paramStr) => {
  if (paramStr && paramStr.length > 0) {
    let str = ''
    paramStr?.forEach((val, index) => {
      str += `${index + 1}. ${val}`
    })
    return str
  } else {
    return ''
  }
}

const generateReturnMdText = (returnStr) => {
  if (returnStr && returnStr.length > 0) {
    return returnStr[0].replace(/[\n]/g, '')
  } else {
    return ''
  }
}

const generateExampleMdText = (exampleStr) => {
  if (exampleStr && exampleStr.length > 0) {
    return exampleStr[0]
  } else {
    return ''
  }
}

const updateHandle = (handleName) => {
  showLoading('生成中, 请稍等...')
  try {
    // 1. 获取md文件的内容
    const mdContent = getMdStr()
    // 2. 获取vue文件的内容
    const templateStr = getTemplateStr(handleName)
    // 3. 获取文件中的注释
    // 获取整个注释的内容块
    const aStr = templateStr.match(/(?<=\/\*\*)(.|\s)*?(?=\*\/)/g)
    const allNoteStr = aStr && aStr.length > 0 ? aStr[0] : ''
    // 获取函数介绍的注释
    const mateDescStrArr = allNoteStr.match(/(?<=@description)(.|\s)*?(?=\* @|.*$)/g)
    // 获取函数参数的注释
    const mateparamStrArr = allNoteStr.match(/(?<=@param)(.|\s)*?(?=\* @|.*$)/g)
    // 获取函数返回值的注释
    const mateReturnStrArr = allNoteStr.match(/(?<=@return)(.|\s)*?(?=\* @|.*$)/g)
    // 获取函数的实例的注释
    const mateExampleStrArr = allNoteStr.match(/(?<=@example)(.|\s)*?(?=\* @|.*$)/g)

    const descStr = generateDescMdText(mateDescStrArr)

    const paramStr = generateParamMdText(mateparamStrArr)

    const returnStr = generateReturnMdText(mateReturnStrArr)

    const exampleStr = generateExampleMdText(mateExampleStrArr)

    const funTemplateStr = `
<!-- ${handleName} start -->
### **${handleName}**

**<span style="fontSize: 16px;">${descStr}</span>**

**参数**
${paramStr}

**返回值**

**<span style="fontSize: 16px;">${returnStr}</span>**

**例子**
\`\`\`js
${exampleStr}
\`\`\`
<!-- ${handleName} end -->
`

    const isNewFun = mdContent.indexOf(`### **${handleName}**`) === -1

    let newMdContent = ''
    if (isNewFun) {
      newMdContent += mdContent + funTemplateStr
    } else {
      const funReExp = new RegExp(
        `<!-- ${handleName} start -->(.|\\s)*?<!-- ${handleName} end -->`,
        'gim'
      )
      // 去除首尾换行符
      const newStr = funTemplateStr.replace(/^\n+|\n+$/g, '')
      newMdContent = mdContent.replace(funReExp, newStr)
    }

    writeNewMd(newMdContent)

    closeLoading()

    g(`${handleName}函数组件文档更新完成!`)
  } catch (error) {
    closeLoading()
    r(error.message)
  }
}

const updateAllMd = () => {
  const funs = getHandleNameList()
  funs.forEach((val) => {
    const funName = getFunName(val)
    updateHandle(funName)
  })
}

const updateHandleMd = (handleName) => {
  updateHandle(handleName)
}

export const updateMd = () => {
  inquirer.prompt(questions).then(({ choice }) => {
    if (choice) {
      // 全量更新
      updateAllMd()
    } else {
      // 只更新某个函数
      inquirer.prompt(questions2).then(({ handle }) => {
        updateHandleMd(handle)
      })
    }
  })
}

updateMd()

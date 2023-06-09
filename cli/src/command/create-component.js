import inquirer from 'inquirer'
import { ComponentInfo } from '../domain/component-info.js'
import { closeLoading, showLoading } from '../util/loading-utils.js'
import { g, r } from '../util/log-utils.js'
import { initComponent } from '../service/init-component.js'
import { initScss } from '../service/init-scss.js'
import { updateComponentLib } from '../service/update-component-lib.js'
import { initDoc } from '../service/init-doc.js'

// 交互提示
const questions = [
  {
    name: 'componentName',
    message: 'Input the component name: ',
    default: ''
  },
  {
    name: 'description',
    message: 'Input the component description: ',
    default: ''
  },
  {
    type: 'list',
    name: 'componentType',
    message: 'Choose the component type: ',
    choices: ['jsx', 'vue']
  }
]

const createNewComponent = async (componentName, description, componentType) => {
  console.log(componentName, description, componentType)
  showLoading('Generating, please wait...')
  try {
    // 1. 构造 ComponentInfo 对象
    const componentInfo = new ComponentInfo(componentName, description, componentType)
    // 2. 创建组件目录及文件
    await initComponent(componentInfo)
    // 3. 创建样式
    await initScss(componentInfo)
    // 4. 更新组件库入口
    await updateComponentLib(componentInfo)
    // 5. 组件库文档
    initDoc(componentInfo)

    closeLoading()
    g(`component [${componentInfo.lineName} ${componentInfo.zhName}] created done!`)
  } catch (e) {
    closeLoading()
    r(e.message)
  }
}

export const createComponent = () => {
  inquirer.prompt(questions).then(({ componentName, description, componentType }) => {
    createNewComponent(componentName, description, componentType)
  })
}

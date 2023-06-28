import { defineConfig, build } from 'vite'
import * as path from 'path'
import fs from 'fs'

// 最新 node 核心包的导入写法
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
// 获取 __filename 的 ESM 写法
// const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))

const entryDir = path.resolve(__dirname, './node_modules/@p-ui/utils/src')
const outputDir = path.resolve(__dirname, '../../lib/utils')

const buildFun = async (name) => {
  const funName = getFunName(name)
  await build(
    defineConfig({
      build: {
        lib: {
          entry: path.resolve(entryDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, funName)
      }
    })
  )
}

// 取方法名，去除文件后缀名
const getFunName = (name) => {
  return name.replace(/(.*\/)*([^.]+).*/gi, '$2')
}

const buildUtils = () => {
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
  funs.forEach(async (name) => {
    // 构建模块方法
    await buildFun(name)
  })
}

// 执行打包
buildUtils()

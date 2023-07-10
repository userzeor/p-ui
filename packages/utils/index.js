// const fileModules = import.meta.glob('./src/*.js')
// const modules = {}
// Object.keys(fileModules).forEach(async (filePath) => {
//   const moduleName = filePath.replace(/(.*\/)*([^.]+).*/gi, '$2')
//   const moduleObj = await fileModules[filePath]()
//   modules[moduleName] = moduleObj[moduleName]
// })

// export default { ...modules }

export { deepAssign } from './src/deepAssign.js'
export { emitter } from './src/emitter.js'
export { isArray } from './src/isArray.js'


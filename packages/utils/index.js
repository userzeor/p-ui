// const fileModules = import.meta.glob('./src/*.js')
// const modules = {}
// Object.keys(fileModules).forEach(async (filePath) => {
//   const moduleName = filePath.replace(/(.*\/)*([^.]+).*/gi, '$2')
//   const moduleObj = await fileModules[filePath]()
//   modules[moduleName] = moduleObj[moduleName]
// })

// export default { ...modules }

export { emitter } from './src/emitter'
export { deepAssign } from './src/deepAssign'
export { isArray } from './src/isArray'

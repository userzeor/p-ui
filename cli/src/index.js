import { program } from 'commander'
import { createComponent } from './command/create-component.js'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export const mainEntry = () => {
  console.log('hello cli mainEntry')

  program.version(require('../package').version).usage('<command> [arguments]')

  program.command('create').description('create a new component').alias('c').action(createComponent)

  program.parse(process.argv)

  if (!program.args.length) {
    program.help()
  }
}

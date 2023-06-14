import shelljs from 'shelljs'
import { closeLoading } from './loading-utils.js'

export const execCmd = (cmd) =>
  new Promise((resolve, reject) => {
    shelljs.exec(cmd, (err, stdout, stderr) => {
      if (err) {
        closeLoading()
        reject(new Error(stderr))
      }
      return resolve('')
    })
  })

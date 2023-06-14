import ora from 'ora'

let spinner = null

export const showLoading = (msg) => {
  spinner = ora(msg).start()
}

export const closeLoading = () => {
  if (spinner != null) {
    spinner.stop()
  }
}

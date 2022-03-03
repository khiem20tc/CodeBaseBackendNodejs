
import Log4js from 'log4js'
import fs from 'fs'
Log4js.configure({
  appenders: {
    file: { type: 'file', filename: './logs/error.log' },
    console: { type: 'console' }
  },
  categories: { default: { appenders: ['console', 'file'], level: 'info' } }
})
const log4js = Log4js.getLogger()
const error = (tag, ...message) => {
  log4js.error(`[${tag}]  - ${JSON.stringify(message)} ${message}`)
}

const info = (tag, ...message) => {
  log4js.info(`[${tag}]  - ${JSON.stringify(message)} ${message}`)
}

const log = (info) => {
  try {
    fs.appendFile('./logs/stamp.log', info, function (err) {
      if (err) throw err
    })
  } catch (error) {
    console.log(error)
  }
}

export default {
  error,
  info,
  log
}

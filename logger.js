const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')
const emitter = new EventEmitter()

emitter.on('log', (message, type = 'INFO') => {
    const messageDate = (new Date()).toJSON().slice(0, 19).replace(/[-T]/g, ':')
    const logMessage = `\n[${type}] ${messageDate} : ${message}\n==========================================`

    fs.appendFile(path.join(__dirname, 'log.txt'), logMessage, (err) => {
        if (err) throw err
    })
})

function log(message) {
    emitter.emit('log', message)
}

module.exports = log 
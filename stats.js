const OS = require('os')
const Logger = require('./logger')

setInterval(() => {
    const { freemem, totalmem } = OS
    const totalMemory = Math.ceil(totalmem() / 1024 / 1024 / 1024)
    const freeMemory = Math.ceil(freemem() / 1024 / 1024 / 1024)
    const usagePercents = parseInt(100 - (freeMemory / totalMemory) * 100)
    
    const memoryStats = {
        free : `${freeMemory} GB`,
        total: `${totalMemory} GB`,
        usage: `${usagePercents}%`
    }
    
    console.clear()
    Logger(`[Memory Stats] ${JSON.stringify(memoryStats)}`)
    console.log('=== Memory Stats ===')
    console.table(memoryStats)
}, 1000)

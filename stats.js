const OS = require('os')

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
    console.log('=== Memory Stats ===')
    console.table(memoryStats)
}, 100)

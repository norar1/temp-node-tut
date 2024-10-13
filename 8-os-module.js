const os = require('os')

// info about current


const user = os.userInfo()
console.log(user);

// methord returns the system uptime in seconds
console.log (`The System Uptime ${os.uptime}() seconds`)

const current = {
    name:os,
    release:os.release(),
    totalMem:os.totalmem(),
    freeMemory:os.freemem()
}
console.log(current)



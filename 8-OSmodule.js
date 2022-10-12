const os = require('os')


// info about current user
const user = os.userInfo()
console.log(user)

// method to return the system uptime in seconds

console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release: os.release(),
    TotalMem:os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
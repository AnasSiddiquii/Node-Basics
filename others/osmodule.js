const os = require('os')
console.log(os.arch())     // 64 bit
console.log(os.freemem()/(1024*1024*1024))  // free ram size left
console.log(os.totalmem()/(1024*1024*1024)) // total ram size
console.log(os.hostname()) // TAJ-ENTERPRISES
console.log(os.platform()) // win32
console.log(os.userInfo()) // user info

let x=20
console.log(++x)

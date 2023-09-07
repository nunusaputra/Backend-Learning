const fs = require('fs')

const read = fs.readFileSync('process.js').toString()

console.log(read);
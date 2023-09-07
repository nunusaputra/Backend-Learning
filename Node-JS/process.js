// Menggunakan built-in modules PROCESS
const process = require('process')
require('dotenv').config()
const env = process.env

env.foo = 'bar'

console.log(env.SECRET_KEY);
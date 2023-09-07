const buffer = require('buffer')
// import { Buffer  } from 'buffer';
// const Buffer = require('buffer')
const buf = Buffer.from('helo world', 'utf-8')

console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
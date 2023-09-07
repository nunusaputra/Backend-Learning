// Menampilkan informasi terkait sistem operasi yang digunakan oleh user
const os = require('os')

console.log('Platform : ', os.platform());
console.log('Arsitektur : ', os.arch());
const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://wisnu:wisnu12345@newcluster.xusxoxd.mongodb.net/coba'

const db = mongoose.connect(DB_URI)

module.exports = db
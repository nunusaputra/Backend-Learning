const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: mongoose.ObjectId,
        ref: 'Address'
    }
})

const user = mongoose.model('Users', userSchema)

module.exports = user
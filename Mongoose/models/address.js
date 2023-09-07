const mongoose = require('mongoose')
const { Schema } = mongoose

const addressSchema = new Schema({
    city: String,
    country: String,
    address: {
        type: String,
        required: true
    }
})

const address = mongoose.model('Address', addressSchema)

module.exports = address
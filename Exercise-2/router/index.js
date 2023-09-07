const express = require('express')
const router = express.Router()
const contactRouter = require('./contacts.router')

router.use(contactRouter)

module.exports = router
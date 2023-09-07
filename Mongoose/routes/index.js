const express = require('express')
const router = express.Router()
const usersRouter = require('./user')
const addressRouter = require('./address')

router.use('/users', usersRouter)
router.use('/address', addressRouter)

module.exports = router
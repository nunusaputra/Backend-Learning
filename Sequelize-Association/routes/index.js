const express = require('express')
const router = express.Router()
const routerUsers = require('./users.router')
const routerTicket = require('./ticket.router')

router.use('/users', routerUsers)
router.use('/ticket', routerTicket)

module.exports = router
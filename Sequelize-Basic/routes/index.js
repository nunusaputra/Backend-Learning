const express = require('express')
const router = express.Router()
const UsersData = require('./users.router')
const BlogData = require('./blog.router')

router.use('/users', UsersData)
router.use('/blog', BlogData)

module.exports = router
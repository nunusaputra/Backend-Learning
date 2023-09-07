const express = require('express')
const router = express.Router()
const moviesRouter  = require('./movies.router') 
const usersRouter  = require('./users.router') 
const authRouter = require('./auth.router')

router.use('/auth', authRouter)
router.use('/movies', moviesRouter)
router.use('/users', usersRouter)

module.exports = router
const express = require('express')
const { Login, getAllBooks, postBook, Token, Logout } = require('../controllers/controlls')
const authVerify = require('../middleware/authVerify')
const router = express.Router()

router.get('/books', authVerify, getAllBooks)
router.post('/login', Login)
router.post('/books', authVerify, postBook)
router.post('/token', Token)
router.post('/logout', Logout)

module.exports = router
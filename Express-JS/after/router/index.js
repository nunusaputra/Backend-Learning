const express = require('express')
const router = express.Router()
const moviesRouter = require('./movies-router')

router.get('/', (req, res) => {
    res.send('Halo selamat datang di halaman Home')
    res.end()
})

router.use('/movies', moviesRouter)


module.exports = router
const express = require('express')
const router = express.Router()
const mhsRouter = require('./mahasiswa.router')

router.get('/', (req, res) => {
    res.status(200).send('Halo Selamat Datang di Menu Home')
})

router.use('/mahasiswa', mhsRouter)

module.exports = router
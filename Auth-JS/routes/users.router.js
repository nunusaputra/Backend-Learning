const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: 'Hello welcome to users homepage'
    })
    res.end()
})

module.exports = router
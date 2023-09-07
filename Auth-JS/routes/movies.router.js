const express = require('express')
const router = express.Router()

const movies = [
    {id: 1, nama: "harry potter", genre: "Sci-fi"}
]

router.get('/', (req, res) => {
    res.json({
        message: 'Hello welcome to movies homepage',
        data: movies
    })
    res.end()
})

module.exports = router
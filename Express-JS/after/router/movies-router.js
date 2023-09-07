const express = require('express')
const router = express.Router()
const { getMovies, getMovie, addMovies} = require('../controllers/index')

router.get('/', getMovies)

router.get('/:id', getMovie)

router.post('/', addMovies)

module.exports = router


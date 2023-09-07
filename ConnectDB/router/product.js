const express = require('express')
const router = express.Router()
const { getAllData, getDataByID, getJoinData, postDataProduct } = require('../controllers/product.controls')

router.get('/', getAllData)
router.get('/join', getJoinData)
router.get('/:id', getDataByID)
// router.post('/', postDataProduct)

module.exports = router
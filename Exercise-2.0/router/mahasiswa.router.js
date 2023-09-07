const express = require('express')
const router = express.Router()
const { getData, getDataByID, addData, deleteData, updateData } = require('../controllers')

router.get('/', getData)
router.get('/:id', getDataByID)
router.post('/', addData)
router.delete('/:id', deleteData)
router.put('/:id', updateData)

module.exports = router
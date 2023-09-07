const express = require('express')
const { getAllUser, addUser, getDataByID, updateData, deleteData } = require('../controllers/user')
const router = express.Router()

router.get('/', getAllUser)
router.get('/:id', getDataByID)
router.post('/', addUser)
router.delete('/:id', deleteData)
router.put('/:id', updateData)

module.exports = router
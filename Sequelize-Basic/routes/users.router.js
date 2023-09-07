const express = require('express')
const { getAllUsers, getDataByID, addNewUser, deleteUser, updateUser } = require('../controllers/users.controllers')
const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getDataByID)
router.post('/', addNewUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

module.exports = router
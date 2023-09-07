const express = require('express')
const { getAllAddress, getAdressByID, addAddress, deleteAddress, updateAddress } = require('../controllers/address')
const router = express.Router()

router.get('/', getAllAddress)
router.get('/:id', getAdressByID)
router.post('/', addAddress)
router.delete('/:id', deleteAddress)
router.put('/:id', updateAddress)

module.exports = router
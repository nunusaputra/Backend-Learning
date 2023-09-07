const express = require('express')
const router = express.Router()
const { getData, postData, getDataByID, hapusContact } = require('../controllers')

router.get('/', getData)
router.post('/', postData)
router.delete('/:nama', hapusContact)
// router.put('/:id', )
router.get('/:nama', getDataByID)

module.exports = router
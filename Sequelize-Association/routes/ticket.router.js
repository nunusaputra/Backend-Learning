const express = require('express')
const { getAllTickets, getTicketByID, addNewTicket, deleteTicket, updateTicket } = require('../controllers/ticket.controllers')
const router = express.Router()

router.get('/', getAllTickets)
router.get('/:id', getTicketByID)
router.post('/', addNewTicket)
router.delete('/:id', deleteTicket)
router.put('/:id', updateTicket)

module.exports = router
const Tickets = require('../models').Ticket
const Users = require('../models').User

module.exports = {
    // Get all data users

    getAllTickets: async (req, res) => {
        try {
            const tickets = await Tickets.findAll({
                attributes: ['id', 'tujuan', 'kelas', 'noKursi', 'jadwal', 'userId' ]
            })

            if (tickets == null) {
                return res.status(404).json({
                    message: 'Data not found!'
                })
            }

            res.status(200).json({
                message: 'Success get data users',
                data: tickets
            })
        } catch (error) {
            res.status(400).json({
                message: 'Bad request'
            })
        }
    },

    // Get data users by id

    getTicketByID: async (req, res) => {
        try {
            const { id } = req.params

            const ticket = await Tickets.findOne({
                where: {
                    id
                },
                attributes: [ 'id', 'tujuan', 'kelas', 'noKursi', 'jadwal', 'userId' ],
                include: [
                    {
                        model: Users,
                        attributes: ['id', 'name', 'email']
                    }
                ]
            })

            if (ticket == null) {
                return res.status(404).json({
                    message: 'Data not found!'
                })
            }

            res.status(200).json({
                message: 'Success get data users by id',
                data: ticket
            })
        } catch (error) {
            res.status(400).json({
                message: 'Bad request!'
            })
        }
    },

    // add new data users

    addNewTicket: async (req, res) => {
        try {
            
            const { id } = req.params
    
            const { tujuan, kelas, noKursi, jadwal, userId } = req.body
            
            const newTicket = await Tickets.create({
                where: {
                    id
                },
                tujuan,
                kelas,
                noKursi,
                jadwal,
                userId
            })

            res.status(201).json({
                message: 'Success add new users',
                data: newTicket
            })

        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    },

    // delete data users by id

    deleteTicket: async (req, res) => {
        try {
            const { id } = req.params

            const newData = await Tickets.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({
                message: 'Success delete data user'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    },

    // update data users by id

    updateTicket: async (req, res) => {
        try {
            
            const { id } = req.params
    
            const { tujuan, kelas, noKursi, jadwal, userId } = req.body
    
           const newUpdate = {
               tujuan,
               kelas,
               noKursi,
               jadwal,
               userId
           }

           await Tickets.update(newUpdate, {
            where: {
                id
            }
           })

            
            const tampil = await Users.findOne({
                where: {
                    id
                }
            })
    
            res.status(200).json({
                message: 'Success update data user',
                data: tampil
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
        }
}
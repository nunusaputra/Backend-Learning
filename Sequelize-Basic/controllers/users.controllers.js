const Users = require('../models').User

module.exports = {
    // get all users
    getAllUsers: async (req, res) => {
        try {
            const getData = await Users.findAll({
                attributes: ['id', 'name', 'username', 'email']
            })
            res.status(200).json({
                message: 'Success get data...',
                data: getData
            })
        } catch (error) {
            res.status(404).json({
                message: 'Data Not Found!'
            })
        }
    },
    
    // get data users by id
    getDataByID: async (req, res) => {
        try {
            const { id } = req.params
            
            const user = await Users.findOne({ 
                where: {
                    id,
                },
                attributes: ['id', 'name', 'username', 'email']
            })

            if (user == null) {
                return res.status(404).json({
                    message: 'Data Not Found!'
                })
            }

            res.status(200).json({
                message: 'Success get data by id...',
                data: user
            })
            
        } catch (error) {
            res.status(400).json({
                message: 'Bad request!'
            })
        }
    },

    // create new users
    addNewUser: async (req, res) => {
        try {
            const { name, username, email, password, address } = req.body

            const newData = await Users.create({
                name,
                username,
                email,
                password,
                address
            })

            res.status(201).json({
                message: 'Success add new users...',
                data: newData
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error...'
            })
        }
    },

    // delete data users
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params

            await Users.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({
                message: 'Success delete data user',
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error...'
            })
        }
    },

    // update data users by id
    updateUser: async (req, res) => {
        try {
            const { id } = req.params

            const { name, username, email, password, address } = req.body

            await Users.update({
                name,
                username,
                email,
                password,
                address
            }, {
                where: {
                    id
                }
            })

            const dataUpdate = await Users.findOne({ where: { id }})

            res.status(200).json({
                message: 'Success update data user',
                data: dataUpdate
            })

        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error...'
            })
        }
    }
}
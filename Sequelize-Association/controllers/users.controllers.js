const Users = require('../models').User

module.exports = {
    // Get all data users

    getAllUsers: async (req, res) => {
        try {
            const users = await Users.findAll({
                attributes: ['id', 'name', 'username', 'email' ]
            })

            if (users == null) {
                return res.status(404).json({
                    message: 'Data not found!'
                })
            }

            res.status(200).json({
                message: 'Success get data users',
                data: users
            })
        } catch (error) {
            res.status(400).json({
                message: 'Bad request'
            })
        }
    },

    // Get data users by id

    getDataByID: async (req, res) => {
        try {
            const { id } = req.params

            const user = await Users.findOne({
                where: {
                    id
                },
                attributes: [ 'id', 'name', 'username', 'email' ]
            })

            if (user == null) {
                return res.status(404).json({
                    message: 'Data not found!'
                })
            }

            res.status(200).json({
                message: 'Success get data users by id',
                data: user
            })
        } catch (error) {
            res.status(400).json({
                message: 'Bad request!'
            })
        }
    },

    // add new data users

    addNewUser: async (req, res) => {
        try {
            
            const { id } = req.params
    
            const { name, username, email, password } = req.body
            
            const newUser = await Users.create({
                where: {
                    id
                },
                name,
                username,
                email,
                password
            })

            res.status(201).json({
                message: 'Success add new users',
                data: newUser
            })

        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    },

    // delete data users by id

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params

            const newData = await Users.destroy({
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

    updateUser: async (req, res) => {
        try {
            
            const { id } = req.params
    
            const { name, username, email, password } = req.body
    
           const newUpdate = {
               name,
               username,
               email,
               password,
           }

           await Users.update(newUpdate, {
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
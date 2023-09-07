const User = require('../models/users')

module.exports = {
    // get all data users
    getAllUser: async (req, res) => {
        try {
            const users = await User.find({}, "-__v -password" ).populate("address", "-__v")

            if(!users) throw res.status(404).json({ message: 'User Not Found!'})

            res.status(200).json({
                message: 'Success get data users',
                data: users
            })
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error'})
        }
    },

    getDataByID: async (req, res) => {
        try {
            const id = req.params.id

            const user = await User.findById(id, "-__v -password").populate("address", "-__v")

            if(!user) throw res.status(404).json({ message: 'User Not Found!'})

            res.status(200).json({
                message: 'Success get user by id',
                data: user
            })
        } catch (error) {
            res.status(400).json({ message: 'Bad request'})
        }
    },

    // Add data users
    addUser: (req, res) => {
        try {
            const data = req.body

            const user = new User(data)

            user.save()

            res.status(201).json({
                message: 'Success create data users'
            })
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error'})
        }
    },

    deleteData: async (req, res) => {
        try {
            const id = req.params.id

            const user = await User.findByIdAndRemove(id)

            if(!user) throw res.status(404).json({ message: 'User Not Found!'})

            res.status(200).json({
                message: 'Success delete data user'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    },

    updateData: async (req, res) => {
        try {
            const data = req.body
            const id = req.params.id
    
            if(!data) throw res.status(400).json({
                message: "Data to update can't be empty"
            })
            
            const update = await User.findByIdAndUpdate(id, data, { useFindAndModify: false})

            if(!update) throw res.status(400).json({
                message: 'Cannot update user data!'
            })

            res.status(200).json({
                message: 'Success update data user'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    }


}
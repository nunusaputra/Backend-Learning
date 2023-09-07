const Address = require('../models/address')

module.exports = {
    // get all data users
    getAllAddress: async (req, res) => {
        try {
            const address = await Address.find({}, "-__v" )

            if(!address) throw res.status(404).json({ message: 'Adress Not Found!'})

            res.status(200).json({
                message: 'Success get data users',
                data: address
            })
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error'})
        }
    },

    getAdressByID: async (req, res) => {
        try {
            const id = req.params.id

            const address = await Address.findById(id, "-__v")

            if(!address) throw res.status(404).json({ message: 'Address Not Found!'})

            res.status(200).json({
                message: 'Success get user by id',
                data: address
            })
        } catch (error) {
            res.status(400).json({ message: 'Bad request'})
        }
    },

    // Add data users
    addAddress: (req, res) => {
        try {
            const data = req.body

            const address = new Address(data)

            address.save()

            res.status(201).json({
                message: 'Success create data address'
            })
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error'})
        }
    },

    deleteAddress: async (req, res) => {
        try {
            const id = req.params.id

            const address = await Address.findByIdAndRemove(id)

            if(!address) throw res.status(404).json({ message: 'Address Not Found!'})

            res.status(200).json({
                message: 'Success delete data address'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    },

    updateAddress: async (req, res) => {
        try {
            const data = req.body
            const id = req.params.id
    
            if(!data) throw res.status(400).json({
                message: "Data to update can't be empty"
            })
            
            const update = await Address.findByIdAndUpdate(id, data, { useFindAndModify: false})

            if(!update) throw res.status(400).json({
                message: 'Cannot update address data!'
            })

            res.status(200).json({
                message: 'Success update data address'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    }

}
const Blog = require('../models').Blog
const Users = require('../models').User

module.exports = {
    // get all Blog
    getAllBlog: async (req, res) => {
        try {
            const getData = await Blog.findAll({ include: Users})
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
    
    // get data Blog by id
    getBlogByID: async (req, res) => {
        try {
            const { id } = req.params
            
            const blog = await Blog.findOne({ 
                where: {
                    id,
                    
                }, include: Users })

            if (blog == null) {
                return res.status(404).json({
                    message: 'Data Not Found!'
                })
            }

            res.status(200).json({
                message: 'Success get data by id...',
                data: blog
            })
            
        } catch (error) {
            res.status(400).json({
                message: 'Bad request!'
            })
        }
    },

    // create new Blog
    addNewBlog: async (req, res) => {
        try {
            const { title, genre, year, desc, userId } = req.body

            const newData = await Blog.create({
                title,
                genre,
                year,
                desc,
                userId
            })

            res.status(201).json({
                message: 'Success add new Blog...',
                data: newData
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error...'
            })
        }
    },

    // delete data Blog
    deleteBlog: async (req, res) => {
        try {
            const { id } = req.params

            await Blog.destroy({
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

    // update data Blog by id
    updateBlog: async (req, res) => {
        try {
            const { id } = req.params

            const { title, genre, year, desc, userId } = req.body

            await Blog.update({
                title,
                genre,
                year,
                desc,
                userId
            }, {
                where: {
                    id
                }
            })

            const dataUpdate = await Blog.findOne({ where: { id }})

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
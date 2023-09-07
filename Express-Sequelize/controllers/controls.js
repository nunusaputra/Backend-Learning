const TodoModel = require('../models').Todo

module.exports = {
    // Get all todos
    Todos: async (req, res) => {
        try {
            const todos = await TodoModel.findAll()

            res.status(200).json({ data: todos })
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error...'
            })
        }
    },

    // Get todo by ID
    TodoByID: async (req, res) => {
        try {
            const { id } = req.params;

            const todo = await TodoModel.findOne({ 
                where: {
                    id
                }
            })

            if (todo == null) {
                return res.status(404).json({
                    message: 'Data Not Found!'
                })    
            } 

            return res.status(200).json({ data: todo })
        } catch (error) {
            res.status(500).json({ 
                message: error.message || 'Internal Server Error...'
            })
        }
    },

    // Create New Todo
    NewTodo: async (req, res) => {
        try {
            const { title, description, startTime, status } = req.body

            const Todos = {
                title,
                description,
                startTime: new Date(),
                status
            }

            const newtodo = await TodoModel.create(Todos)

            res.status(201).json({
                message: 'Success Create New Todos...',
                data: newtodo
            })

        } catch (error) {
            res.status(500).json({
                message: error.message || 'Internal Server Error...'
            })
        }
    },

    // Update Todos
    UpdateTodo: async (req, res) => {
        try {
            const { id } = req.params
            const { title, description, startTime, status } = req.body

            const UpdateTodoData = {
                title, 
                description,
                startTime: new Date(),
                status
            }

            await TodoModel.update(UpdateTodoData, {
                where: {
                    id
                }
            })

            const tampil = await TodoModel.findOne({
                where: {
                    id
                }
            })
            res.status(200).json({
                message: 'Update todo success...',
                data: tampil
            })

        } catch (error) {
            res.status(500).json({
                message:error.message || 'Internal Server Error...'
            })
        }
    },

    // Delete Todo
    DeleteTodo: async (req, res) => {
        try {
            const { id } = req.params

            await TodoModel.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({ 
                message: 'Success delete todo'
            })
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Inernal Server Error...'
            })
        }
    }
}
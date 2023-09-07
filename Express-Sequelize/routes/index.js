const express = require('express')
const { Todos, TodoByID, NewTodo, UpdateTodo, DeleteTodo } = require('../controllers/controls')
const router = express.Router()

router.get('/todos', Todos)
router.get('/todos/:id', TodoByID)
router.post('/todos', NewTodo)
router.put('/todos/:id', UpdateTodo )
router.delete('/todos/:id', DeleteTodo)

module.exports = router
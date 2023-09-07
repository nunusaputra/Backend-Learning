const express = require('express')
const { getAllBlog, getBlogByID, addNewBlog, deleteBlog, updateBlog } = require('../controllers/blog.controllers')
const router = express.Router()

router.get('/', getAllBlog)
router.get('/:id', getBlogByID)
router.post('/', addNewBlog)
router.delete('/:id', deleteBlog)
router.put('/:id', updateBlog)

module.exports = router
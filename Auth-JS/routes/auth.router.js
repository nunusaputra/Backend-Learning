const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const users = [
    {id: 1, email: "Wisnu@gmail.com", password: "123"},
    {id: 2, email: "Poltak@gmail.com", password: "123"},
]

const SECRETKEY = "123jashdjaja"

router.post('/login', (req, res) => { 
    const data = req.body

    const usersData = users.find(item => data.email === item.email && data.password === item.password)
    console.log(data, 'data');

    const token = jwt.sign(data, SECRETKEY)

    if (usersData) {
        return res.status(200).json({
            message: 'Login Success',
            token
        })
    }

    res.status(401).json({
        message: 'Email or password are incorrect'
    })
})

router.post('/register', (req, res) => { 
    res.json({
        message: 'Success register'
    })
})

module.exports = router
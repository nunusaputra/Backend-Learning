const users = require('../database/usersDB.js')
const books = require('../database/booksDB.js')
const refreshTokens = require('../database/refreshToken.js')
const jwt = require('jsonwebtoken')

module.exports = {
    // Create Fitur Login
    Login: (req, res) => {
        const { username, password } = req.body

        const user = users.find(u => u.username === username && u.password === password)

        if (user) {
            const accessToken = jwt.sign({ username: user.username, role: user.role}, 
                process.env.ACCESS_TOKEN, { expiresIn: '1m'})
            
            const refreshToken = jwt.sign({ username: user.username, role: user.role},
                process.env.REFRESH_TOKEN, { expiresIn: '1d' })
            
            refreshTokens.push(refreshToken)

            res.status(200).json({ accessToken, refreshToken })

        } else {
            res.status(400).json({
                message: 'Login Failed'
            })
        }
    },

    // Get All Books
    getAllBooks: (req, res) => {
        res.status(200).json({
            message: 'Success get data books',
            data: books
        })
    },

    // Create New Book
    postBook: (req, res) => {
        const { role } = req.user

        if( role !== 'admin') {
            return res.sendStatus(403)
        }

        const book = req.body
        books.push(book)

        res.status(201).json({
            message: 'Success create new book',
            data: book
        })
    },

    // Create token
    Token: (req, res) => {
        const { token } = req.body

        if (!token) {
            return res.sendStatus(401)
        }

        if (!refreshTokens.includes(token)) {
            return res.sendStatus(403)
        }

        jwt.verify(token, process.env.REFRESH_TOKEN, (err, user) => {
            if (err) {
                return res.sendStatus(403)
            }

            const accessToken = jwt.sign({ username: user.username, role: user.role},
                process.env.ACCESS_TOKEN, { expiresIn: '50s'})

            res.status(200).json({ accessToken })
        })
    },

    // Create Logout
    Logout: (req, res) => {
        const { token } = req.body

        refreshTokens = refreshTokens.filter(token => t !== token)

        res.status(200).json({ message: 'Logout Success'})
    }
}
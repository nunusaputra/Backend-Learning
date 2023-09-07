const express = require('express')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const verifyToken = require('./middleware/verifyToken')
require('crypto').randomBytes(64).toString('hex')

const app = express()
const PORT = 3000
dotenv.config()
process.env.TOKEN_SECRET

app.use(express.json())

// (async () => {
//     const token = await res.json
//     document.cookie = `token=${token}`
// })()

function generateToken (username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, {
        expiresIn: '30s'
    })
}

app.post('/api/createNewuser', (req, res) => {
    const token = generateToken({ username: req.body.username })
    res.json(token)
})

app.get('/api/orders', verifyToken, (req, res) => {
    res.status(200).send('Welcome to my dashboard...')
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})
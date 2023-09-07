const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()

const PORT = 3000

app.use(basicAuth({
    users: { 'admin': 'supersecret'},
    challenge: true,
    realm: 'foo'
}))

app.get('/', (req, res) => {
    res.send('Authorized')
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})
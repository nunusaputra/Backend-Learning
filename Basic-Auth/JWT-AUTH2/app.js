const express = require('express')
const dotenv = require('dotenv')
const app = express()
const router = require('./routes/index')
dotenv.config()

const PORT = 8080

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})
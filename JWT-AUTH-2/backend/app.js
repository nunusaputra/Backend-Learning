const express = require('express')
const db = require('./config/Database')
const router = require('./routes/index')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()

const app = express()

const PORT = 5000;

(async () => {
    try {
        await db.authenticate()
        console.log('Database connected...');

    } catch (error) {
        console.error(error);
    }
})()

app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})
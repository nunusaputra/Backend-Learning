const express = require('express')
const app = express()
const db = require('./config/db')
const allRouter = require('./routes/index')

const PORT = 3000

db.then(() => {
    console.log('Database connected...');
}).catch((err) => {
    console.log(err);
})

app.use(express.json())
app.use(allRouter)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})
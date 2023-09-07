const express = require('express')
const app = express()
const router = require('./routes/index')

const PORT = 5000

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})
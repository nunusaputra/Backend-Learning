const express = require('express')
const app = express()
const allRouter = require('./routes/index')

const PORT = 5000

app.use(express.json())
app.use(allRouter)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})
const express = require('express')
const app = express()
const PORT = 8080
const router = require('./router')

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})
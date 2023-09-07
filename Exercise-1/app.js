const express = require('express')
const app = express()
const PORT = 3000
const router = require('./router/index')
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Halo')
//     res.end()
// })

app.use(router)

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})
const express = require('express')
const app = express()
const PORT = 3000

// middleware
const logger = (req, res, next) => {
    console.log('Halo semua');
    next()
}

const checkUser = (req, res, next) => {
    console.log('User ini membawa token');
    next()
}

app.use(express.json())
app.use(logger)


const movies = [
    {
        id: 1,
        title: "Wiro Sableng"
    },
    {
        id: 2,
        title: "Mak Ijah"
    },
]

app.get('/', (req, res) => {
    res.send('Haloo')
    res.end()
})

app.get('/movies', (req, res) => {
    console.log('ini movies');
    res.send(movies)
    res.end()
})

app.post('/movies', (req, res) => {
    const data = req.body
    console.log(data);
    movies.push(data)
    res.status(201).send({
        message: "data successed added"
    })
})

app.get('/users', checkUser, (req, res) => {
    console.log('Users login');
    res.send({
        nama: 'Wisnu Saputra',
        noHP: '083815499134'
    })
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})
// Membuat web server sederhana menggunakan Express JS
const express = require('express')
const app = express()
const port = 3000

// Setup Routing dan listen dari express js


// Method GET
app.get('/', (req, res) => {
    res.send('Halo nama saya adalah wisnu')
})


// Response
app.get('/helo', (req, res) => {
    let nama = req.query.nama
    let age = req.query.age

    res.status(200).json({
        "nama": nama,
        "age": age,
        greeting: `halo salam kenal ${nama}`
    })
})

// Status Code
app.get('/helo-ok', (req, res) => {
    res.status(200).json({
        "nama": 'Budi',
        "age": 23,
        "greeting": 'Halo budi goblok'
    })
})


// Without Nested Route
// app.get('/helo/ani', (req, res) => {
//     res.send('Helo nama saya adalah ani')
// })

// app.get('/helo/adi', (req, res) => {
//     res.send('Helo nama saya adalah adi')
// })

// app.get('/helo/ari', (req, res) => {
//     res.send('Helo nama saya adalah ari')
// })

// With Nested Route
const hello = require('express').Router()

app.use('/helo', hello)


hello.get('/ani', (req, res) => {
    res.send('Helo aing teh ani anjing')
})

hello.get('/adi', (req, res) => {
    res.send('Helo aing teh adi anjing')
})

hello.get('/ari', (req, res) => {
    res.send('Helo aing teh ari anjing')
})

// Method POST
// app.post('/posting', (req, res) => {
//     res.send('This page success to posting the content')
// })

// Method DELETE
// app.delete('/delete', (req, res) => {
//     res.send('This page has deleted')
// })


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})
const express = require('express')
const app = express()
const port = 3000

// Menjalankan Kode Apapun
// const skilvulLogger = (req, res, next) => {
//     console.log('Halo Skilvul, request diterima');
//     next()
// }


// Memodifikasi Object Request dan Object Response
// const addRequestTime = (req, res, next) => {
//     req.requestTime = Date.now()
//     next()
// }


// Menghentikan Request-Respon Cycle
const stopHere = (req, res, next) => {
    res.send('<p>request stop from middleware</p>')
}

app.use(stopHere)

app.get('/', (req, res) => {
    let responText = 'Halo Skilvul<br>'
    // responText += '<small>Request at: ' + req.requestTime + '</small>'
    res.send(responText)
})

app.listen(port)
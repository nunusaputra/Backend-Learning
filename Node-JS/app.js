// Membuat web server sederhana dengan node js
const http = require('http')
const port = 3000
const url = require('url')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const query = url.parse(req.url, true).query
    const txt = query.year + " " + query.month
    res.end(txt)
})
.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
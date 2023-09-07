const movies = [
    {
        id: 1,
        title: 'Wiro Sableng'
    },
    {
        id: 2,
        title: 'Mak Ijah'
    }
]

module.exports = {
    /* -- Start Melihat Semua Data Movies --*/
    
    getMovies: (req, res) => {
        res.status(200).send(movies)
        res.end()
    },

    /* -- End Melihat Semua Data Movies -- */

    /* -- Start Melihat Satu Data Movies --*/

    getMovie: (req, res) => {
        const paramsID = req.params.id
        const movie = movies.find((item) => item.id == paramsID)
        res.status(200).send(movie)
        res.end()
    },

    /* -- End Melihat Satu Data Movies -- */

    /* -- Start Menambah Satu Data Movies --*/

    addMovies: (req, res) => {
        const data = req.body
        res.status(201).send({
            message: 'Success added new data'
        })
        movies.push(data)
        res.end()
    },

    /* -- End Menambah Satu Data Movies -- */
}
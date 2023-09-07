const connection = require('../config/db')

module.exports = {
    getAllData: (req, res) => {
        connection.query(
            `SELECT * FROM product`,
            function(err, results, fields) {
                res.status(200).json({
                    message: "Success get all data",
                    data: results
                })
            }
        )
    },

    getDataByID: (req, res) => {
        const id = req.params.id

        connection.query(
            'SELECT * FROM product WHERE id = ?', [id],
            function (err, results, fields) {
                if (err) {
                    console.error('Terjadi kesalahan saat mengambil data: ' + err);
                    return res.status(500).json({
                        error: 'Terjadi kesalahan saat mengambil data'
                    })
                }

                if (results.length === 0) {
                    return res.status(404).json({
                        message: 'Error Data Not Found'
                    })
                }
                res.status(200).json({
                    message: "Success get data by id",
                    data: results[0]
                })
            }
        )
    },

    getJoinData: (req, res) => {
        connection.query(
            `SELECT person.id, person.nama as person, product.nama as product, product.price
            FROM fav_product INNER JOIN person
            ON fav_product.id_person = person.id
            INNER JOIN product
            ON fav_product.id_product = product.id`,
            function (err, results, fields) {
                res.status(200).json({
                    message: "Success Join Data Table",
                    data: results
                })
            }
        )
    },

    // postDataProduct: (req, res) => {
    //     const { nama, price, category_id} = req.body

    //     connection.query(
    //         'INSERT INTO product (nama, price, category_id VALUES (?, ?, ?) ', [nama, price, category_id], 
    //         function (err, results, fields) {
    //             if (err) {
    //                 console.error('Terjadi kesalahan saat memasukan data : ', + err);
    //                 return res.status(500).json({
    //                     error: 'Terjadi kesalahan saat memasukan data'
    //                 })
    //             }

    //             res.status(201).json({
    //                 message: 'Success insert data product to database',
    //                 data: {
    //                     id: results.insertId,
    //                     nama,
    //                     price,
    //                     category_id,
    //                 }
    //             })
    //         } 
    //     )
    // }
}
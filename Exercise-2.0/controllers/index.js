const mahasiswa = [
    {id: 1, nama: "Wisnu Saputra", npm: "2010631170126"},
    {id: 2, nama: "Bambang Poltak", npm: "2010631170125"},
    {id: 3, nama: "Ucok Wardana", npm: "2010631170128"},
]

module.exports = {
    /* -- Start Get All Data Mahasiswa -- */

    getData: (req, res) => {
        res.status(200).json({
            message: 'Success get all data mahasiswa',
            data: mahasiswa
        })
        res.end()
    },

    /* -- End Get All Data Mahasiswa -- */

    /* -- Start Get One Data Mahasiswa -- */

    getDataByID: (req, res) => {
        const { id } = req.params
        const mhs = mahasiswa.find(item => item.id == id)

        if (!mhs) {
            res.status(404).send('Data Mahasiswa Not Found')
        } else {
            res.status(200).json({
                message: 'Success get data mahasiswa by id',
                data: mhs
            })
        }
        res.end()
    },

    /* -- End Get One Data Mahasiswa -- */

    /* -- Start Add One Data Mahasiswa -- */
    
    addData: (req, res) => {
        const data = req.body
        res.status(201).json({
            message: 'Success add one data mahasiswa',
            data: data
        })
        mahasiswa.push(data)
        res.end()
    },
    
    /* -- End Add One Data Mahasiswa -- */

    /* -- Start Delete One Data Mahasiswa -- */

    deleteData: (req, res) => {
        const { id } = req.params
        const data = mahasiswa.findIndex(item => item.id == id)

        if (!data) {
            res.status(400).json({
                message: 'Error: Failed delete data mahasiswa',
            })
        } else {
            mahasiswa.splice(data, 1)
            res.status(200).json({
                message: 'Success delete one data mahasiswa',
                data: mahasiswa
            })
            
        }
        res.end()
    },

    /* -- End Delete One Data Mahasiswa -- */

    /* -- Start Update One Data Mahasiswa -- */

    updateData: (req, res) => {
        const { id } = req.params
        const updateMhs = req.body

        const mhs = mahasiswa.find(item => item.id == id)

        if (!mhs) {
            res.status(400).json({
                message: 'Failed to update data mahasiswa',
                data: updateMhs
            })
        }

        mhs.id = updateMhs.id
        mhs.nama = updateMhs.nama
        mhs.npm = updateMhs.npm

        res.status(201).json({
            message: 'Succes to update data mahasiswa',
            data: mhs
        })
    }

    /* -- End Update One Data Mahasiswa -- */
}
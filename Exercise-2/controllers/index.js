const { loadContact, addContact, findContact, deleteContact, updateContact } = require('./contacts.controls')

module.exports = {
    /* -- Start Melihat Semua Data Contact -- */
    getData: (req, res) => {
        const contacts = loadContact()
        res.status(200).send(contacts)
        res.end()
    },
    /* -- End Melihat Semua Data Contact -- */

    /* -- Start Membuat Satu Data Contact -- */
    postData: (req, res) => {
        addContact(req.body)
        res.status(201).send({
            messsage: 'Success added a new data'
        })
        res.end()
    },
    /* -- End Membuat Satu Data Contact -- */   

    /* -- Start Mendapatkan Satu Data Contact -- */
    
    getDataByID: (req, res) => {
        const contact = findContact(req.params.nama)
        res.status(200).json({
            message: 'Success get data by nama',
            data: contact
        })
        res.end()
    },
    
    /* -- End Mendapatkan Satu Data Contact -- */  

    /* -- Start Menghapus Satu Data Contact -- */
    
    hapusContact: (req, res) => {
        
      }
      

    /* -- End Menghapus Satu Data Contact -- */  
}
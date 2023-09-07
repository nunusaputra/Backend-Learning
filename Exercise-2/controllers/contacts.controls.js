const fs = require('fs')

// Membuat folder data jika belum ada
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// Membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

// Membuat fungsi loadContact
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json')
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

// Membuat fungsi pencarian untuk detail contact
const findContact = (nama) => {
    const contacts = loadContact()
    const contact = contacts.find(contact => contact.nama.toLowerCase() === nama.toLowerCase())
    return contact
}

// Mengubah / menimpa file contacts.json dengan yang baru
const saveContact = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

// Membuat fungsi untuk add new contact
const addContact = (contact) => {
    const contacts = loadContact()
    contacts.push(contact)
    saveContact(contacts)
}

// Mengecek apakah ada data duplikat atau tidak
const cekDuplikat = (nama) => {
    const contacts = loadContact()
    return contacts.find(contact => contact.nama === nama)
}

// Membuat fungsi untuk menghapus contact
const deleteContact = (nama) => {
    const contacts = loadContact()
    const filteredContact = contacts.filter(contact => contact.nama !== nama)
    saveContact(filteredContact)
}

// Membuat fungsi untuk update contact
const updateContact = (contactBaru) => {
    const contacts = loadContact()
    const filteredContact = contacts.filter(contact => contact.nama !== contactBaru.oldNama)
    delete contactBaru.oldNama
    filteredContact.push(contactBaru)
    saveContact(filteredContact)
}

module.exports = { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContact }
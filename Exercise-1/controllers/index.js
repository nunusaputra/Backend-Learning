const express = require('express')
const app = express()


module.exports = {
    home: (req, res) => {
        res.render('index', {
            title: 'Halaman Home',
            layout: 'layouts/main-layouts'
        })
    },

    about: (req, res) => {
        res.render('about', {
            title: 'Halaman About',
            layout: 'layouts/main-layouts'
        })
    },

    contact: (req, res) => {
        res.render('contact', {
            title: 'Halaman Contact',
            layout: 'layouts/main-layouts'
        })
    }
}
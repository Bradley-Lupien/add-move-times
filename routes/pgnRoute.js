const express = require('express')
const path = require('../views/devPath')
const router = express.Router()

router.get('/', (req,res) => {
    res.sendFile(path + 'pgnReader.html')
})

router.post('/', (req,res) => {
    console.log('POST request successful: ')
   //TODO: Add js function that grabs form data and sends post request
   
    res.redirect('/read')
})

module.exports = router
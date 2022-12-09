const express = require('express')
const path = require('./views/devPath')
const pgnRoute = require('./routes/pgnRoute')
const app = express()
const port = 3000

app.use('/read', pgnRoute)

app.get('/', (req,res) => {
    res.status(200)
    res.sendFile(path + 'index.html')
})

app.listen(port)
console.log('App successfully listening on port ' + port)
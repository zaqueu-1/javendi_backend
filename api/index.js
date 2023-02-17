const express = require('express')
const fileupload = require('express-fileupload')
const cors = require('cors')
const db = require('../db/db')
const routes = require('../routes/router')
const app = express()

function main() {
    db()
    app.use(cors())
    app.use(fileupload({useTempFiles: true}))
    app.use(express.json())
    app.use('/api', routes)

    app.listen(9001, function() {
        console.log('🪓')
    })
}

module.exports = main;
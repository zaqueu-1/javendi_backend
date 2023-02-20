const express = require('express');
const fileupload = require('express-fileupload');
const cors = require('cors');
const db = require('../db/db');
const routes = require('../routes/router');
const app = express();

function main() {
    app.use(cors());
    app.use(express);
    app.use(express.json({limit : 52428800, extended : true}));
    app.use(express.urlencoded({limit : 52428800, extended : true}));
    app.use(fileupload({useTempFiles: true}));
    app.use('/api', routes);
    db();

    app.listen(9001, function() {
        console.log('🪓')
    })
}

module.exports = main; 
const express = require('express');
const fileupload = require('express-fileupload');
const db = require('../db/db');
const routes = require('../routes/router');
const app = express();

function main() {
    db();

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
      });

    app.use(express.json({limit : 52428800, extended : true}));
    app.use(express.urlencoded({limit : 52428800, extended : true}));
    app.use(fileupload({useTempFiles: true}));
    app.use('/api', routes);

    app.listen(9001, function() {
        console.log('🪓')
    })
}

module.exports = main; 
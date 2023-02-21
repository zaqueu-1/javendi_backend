const express = require('express');
const fileupload = require('express-fileupload');
const cors = require('cors');
const db = require('../db/db');
const routes = require('../routes/router');
const app = express();

function main() {
    db();
    app.use(cors());

    app.options('*', cors({
        allowedHeaders: 'Content-Type,Authorization',
        methods: 'GET,POST,PUT,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204
    }));
    
    app.use(express.json({limit : 52428800, extended : true}));
    app.use(express.urlencoded({limit : 52428800, extended : true}));
    app.use(fileupload({useTempFiles: true}));
    app.use('/api', routes);

    app.listen(9001, function() {
        console.log('🪓')
    })
}

module.exports = main; 
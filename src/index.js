require('dotenv').config();
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const app = express(),
    connectdb = require('../config/db').connect,
    routes = require('./routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Rest Api routes
app.use('/user', routes);

app.use(express.static('public'));

app.get('*', (req, res, next) => {
    res.status(404).send({
        success: false,
        statuscode: 404,
        message: "Page Not found"
    });
});

app.use((err, req, res, next) => {
    if (!err) return next();
    // console.error("Internal server error", err)
    res.status(500).send({
        error: {
            success: false,
            statuscode: 500,
            message: 'Internal Server Error'
        }
    });
});

// start server
app.listen(process.env.PORT, function () {
    console.log(`Express server listening on ${process.env.PORT}, in ${app.get('env')} mode`);
    connectdb;
});
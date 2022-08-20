const express = require('express');
const routes = express.Router();
const controller = require('../controller');

// super admin
routes.post('/test'
    , controller.test);

module.exports = routes;
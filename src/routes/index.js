const express = require('express');
const routes = express.Router();
const controller = require('../controller');
const validate = require('../middleware').validate;
const { val_user, val_objectId } = require('../../config/validator');
const { storeImg } = require('../../utility');

// user
routes.post('/create'
    , val_user
    , validate
    , controller.create);

routes.patch('/update'
    , val_user
    , validate
    , controller.update);

routes.post('/delete'
    , val_objectId
    , validate
    , controller.delete);

routes.post('/get'
    // , val_objectId
    // , validate
    , controller.get);

routes.post('/upload/profile'
    , storeImg
    , controller.uploadProfile);

module.exports = routes;
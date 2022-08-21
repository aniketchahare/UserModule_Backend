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

routes.delete('/delete'
    , val_objectId
    , validate
    , controller.delete);

routes.get('/get'
    , controller.get);

routes.post('/getby'
    , val_objectId
    , validate
    , controller.getById);

routes.post('/upload/profile'
    , storeImg
    , controller.uploadProfile);

module.exports = routes;
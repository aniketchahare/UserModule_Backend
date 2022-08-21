const userServices = require('../services');
const response = require('../../utility');
const messages = require('../../general/messages');
module.exports = {
    async create(req, res, next) {
        try {
            const userData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mobile: req.body.mobile,
                emailId: req.body.emailId,
                profileUrl: req.body.profileUrl || null
            }

            let result = await userServices.create(userData);

            if (result && result.ErrorMessage) {
                return response.createResponse(res, result.status, result.ErrorMessage);
            } else {
                return response.createResponse(res, 200, messages.USER_CREATED_SUCCESS, result);
            }
        } catch (err) {
            next(err)
        }
    },

    async update(req, res, next) {
        try {
            let result = await userServices.update(req.body);

            if (result && result.ErrorMessage) {
                return response.createResponse(res, result.status, result.ErrorMessage);
            } else {
                return response.createResponse(res, 200, messages.USER_UPDATE_SUCCESS, result);
            }
        } catch (err) {
            next(err)
        }
    },

    async delete(req, res, next) {
        try {
            let result = await userServices.delete(req.body);

            if (result && result.ErrorMessage) {
                return response.createResponse(res, result.status, result.ErrorMessage);
            } else {
                return response.createResponse(res, 200, messages.USER_DELETE_SUCCESS, result);
            }
        } catch (err) {
            next(err)
        }
    },

    async get(req, res, next) {
        try {
            let result = req.body._id ? await userServices.get(req.body) : await userServices.get();

            if (result && result.ErrorMessage) {
                return response.createResponse(res, result.status, result.ErrorMessage);
            } else {
                return response.createResponse(res, 200, messages.USERS_FETCHED_SUCCESS, result);
            }
        } catch (err) {
            next(err)
        }
    },

    async getById(req, res, next) {
        try {
            let result = await userServices.get(req.body);

            if (result && result.ErrorMessage) {
                return response.createResponse(res, result.status, result.ErrorMessage);
            } else {
                return response.createResponse(res, 200, messages.USERS_FETCHED_SUCCESS, result);
            }
        } catch (err) {
            next(err)
        }
    },

    async uploadProfile(req, res, next) {
        try {
            const data = {
                _id: req.body._id,
                profileUrl: req.profileUrl
            };

            let result = await userServices.update(data);

            if (result && result.ErrorMessage) {
                return response.createResponse(res, result.status, result.ErrorMessage);
            } else {
                return response.createResponse(res, 200, messages.USER_PROFILE_UPLOADED, result);
            }
        } catch (err) {
            next(err)
        }
    },
}
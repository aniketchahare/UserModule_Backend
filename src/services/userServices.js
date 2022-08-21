const userModel = require('../model');
const messages = require('../../general/messages');
const { update } = require('../controller/userController');

module.exports = {
    async create(userData) {
        try {
            if (await checkUserExist({ emailId: userData.emailId }) === 1) {
                return { status: 409, ErrorMessage: messages.USEREMAIL_ALREADY_EXIST };
            }
            let result = await userModel.create(userData);

            if (result) {
                return result;
            } else {
                return { status: 400, ErrorMessage: messages.SOMETHING_WRONG };
            }
        } catch (err) {
            return err;
        }
    },

    async update(userData) {
        try {
            if (await checkUserExist({ _id: userData._id }) === 0) {
                return { status: 400, ErrorMessage: messages.USER_NOT_EXIST };
            } else {
                let result = await userModel.update({ _id: userData._id }, userData);

                if (result) {
                    return result;
                } else {
                    return { status: 400, ErrorMessage: messages.SOMETHING_WRONG };
                }
            }
        } catch (err) {
            return err;
        }
    },

    async delete(userData) {
        try {
            if (await checkUserExist({ _id: userData._id }) === 0) {
                return { status: 400, ErrorMessage: messages.USER_NOT_EXIST };
            } else {
                let result = await userModel.delete({ _id: userData._id });

                if (result) {
                    return result;
                } else {
                    return { status: 400, ErrorMessage: messages.SOMETHING_WRONG };
                }
            }
        } catch (err) {
            return err;
        }
    },

    async get(userData) {
        try {
            let data = {};
            if (userData && userData._id) {
                if (await checkUserExist({ _id: userData._id }) === 0) {
                    return { status: 400, ErrorMessage: messages.USER_NOT_EXIST };
                }
                data = { _id: userData._id }
            }
            let result = await userModel.get(data);

            if (result) {
                return result;
            } else {
                return { status: 400, ErrorMessage: messages.SOMETHING_WRONG };
            }
        } catch (err) {
            return err;
        }
    },
}

async function checkUserExist(data) {
    try {
        let result = await userModel.find(data);
        return result && result.length;
    } catch (err) {
        // console.error(err);
        throw err;
    }
}
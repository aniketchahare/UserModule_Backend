const { buildCheckFunction } = require('express-validator');
const checkBodyAndQuery = buildCheckFunction(['body', 'params']);

const nameRex = /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/;

module.exports = {
    val_user: [
        checkBodyAndQuery('firstName').rtrim().ltrim()
            .isString()
            .exists()
            .notEmpty().withMessage(`First name is a required field`)
            .matches(nameRex)
            .withMessage(`First name should contain only alphabets`)
            .isLength({ min: 3 }).withMessage(`First name must at least 3 character`)
        ,
        checkBodyAndQuery('lastName').rtrim().ltrim()
            .isString()
            .exists()
            .notEmpty().withMessage(`Last name is a required field`)
            .matches(nameRex)
            .withMessage(`Last name should contain only alphabets`)
            .isLength({ min: 3 }).withMessage(`Last name must at least 3 character`)
        ,
        checkBodyAndQuery('mobile').trim().escape()
            .isInt()
            .exists()
            .notEmpty().withMessage(`Mobile is a required field`)
            .isMobilePhone(["en-IN", "en-US"]).withMessage(`Must provide a valid mobile number`)
            .isLength({ min: 10, max: 10 })
            .withMessage('Mobile number length must be 10 digit')
        ,
        checkBodyAndQuery('emailId').trim().escape()
            .notEmpty().withMessage(`Email id is a required field`)
            .exists()
            .isEmail().withMessage('Invalid email')
    ],

    val_objectId: [
        checkBodyAndQuery('_id').trim()
            .notEmpty().withMessage(`Id is a required field`)
            .exists()
            .isMongoId().withMessage(`Enter valid id`)
    ],
}
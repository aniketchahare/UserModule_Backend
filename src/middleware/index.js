const { validationResult } = require('express-validator');

exports.validate = (req, res, next) => {

    const response = {
        'success': false,
        'message': 'Something went wrong',
        'data': {}
    };

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            response.error = errors.array();
            return res.status(422).send(response);
        } else {
            next();
        }

    } catch (err) {
        if (err instanceof TypeError
            || err instanceof SyntaxError
            || err instanceof EvalError
            || err instanceof RangeError
            || err instanceof ReferenceError) {
            console.log('Programming Error: ', (err));
        } else {
            console.log('User defined Errors: ', err);
        }
        // console.error('err', err);
        return res.status(500).json(response);
    }
}
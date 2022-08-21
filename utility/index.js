const upload = require('../config/multer').upload;

module.exports = {
    createResponse: (res, status, message, data) => {
        try {
            let respData = {
                status: status,
                message: message
            };
            if (data !== undefined && data !== null) {
                respData.payload = data;
            }
            return res.status(status).send(respData);
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    storeImg: (req, res, next) => {
        let singleUpload = upload.single('file');

        singleUpload(req, res, (err, data) => {
            if (err) {
                console.error("error occur in uploadImg utility callback", err.message)
                return res.status(400).json({ message: err.message, statuscode: 400 })
            }

            console.log(req.file);
            req.profileUrl = `http://localhost:3000/${req.file.filename}`;
            next();
        })
    },
}
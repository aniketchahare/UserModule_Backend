module.exports = {
    test(req, res, next) {
        try {
            return res.status(200).send({ message: "Successfully called..", success: true });
        } catch (err) {
            next(err)
        }
    },
}
module.exports = {
    // user
    create: require('./userController').create,
    update: require('./userController').update,
    delete: require('./userController').delete,
    get: require('./userController').get,
    getById: require('./userController').getById,
    uploadProfile: require('./userController').uploadProfile,
}
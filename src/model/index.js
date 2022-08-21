module.exports = {
    // user
    create: require('./userModel').create,
    find: require('./userModel').find,
    update: require('./userModel').update,
    delete: require('./userModel').delete,
    get: require('./userModel').get,
}
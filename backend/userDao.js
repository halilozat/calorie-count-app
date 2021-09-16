const User = require('./userModel')

var userDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateUser: updateUser
}

function findAll() {
    return User.findAll();
}

function findById(id) {
    return User.findByPk(id);
}

function deleteById(id) {
    return User.destroy({ where: { id: id } });
}

function create(user) {
    var newUser = new User(user);
    return newUser.save();
}

function updateUser(user, id) {
    var updateUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    };
    return User.update(updateUser, { where: { id: id } });
}
module.exports = userDao;
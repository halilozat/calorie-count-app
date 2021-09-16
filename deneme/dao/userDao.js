const User = require('../models/User');
var userDao = {
    findAll,
    create,
    findById,
    deleteById,
    updateUser
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
        username: user.username,
        password: user.password
    };
    return User.update(updateUser, { where: { id: id } });
}
module.exports = userDao;
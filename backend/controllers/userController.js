const User = require("../models/User")



function findUserById(req, res) {
    User.findByPk(req.param.id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        })
}





var userController = {
    findUsers,
    findUserById,
    updateUser,
    deleteById
}

module.exports = userController;
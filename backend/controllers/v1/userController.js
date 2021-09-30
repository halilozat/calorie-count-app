const UserModel = require("../../models/UserModel");
const CryptoJS = require("crypto-js");


const userUpdate = async (request, response) => {
    if (request.user.id === request.params.id || request.user.isAdmin) {
        if (request.body.password) {
            request.body.password = CryptoJS.AES.encrypt(
                request.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try {
            const updatedUser = await UserModel.findByIdAndUpdate(
                request.params.id,
                {
                    $set: request.body,
                },
                { new: true }
            );
            response.code(200).send(updatedUser);
        } catch (err) {
            response.code(500).send(err);
        }
    } else {
        response.code(403).send("You can update only your account!");
    }
}

const userDelete = async (request, response) => {
    if (request.user.id === request.params.id || request.user.isAdmin) {
        try {
            await UserModel.findByIdAndDelete(request.params.id);
            response.code(200).send("User has been deleted...");
        } catch (err) {
            response.code(500).send(err);
        }
    } else {
        response.code(403).send("You can delete only your account!");
    }
}

const getUserById = async (request, response) => {
    try {
        UserModel.findById(request.params.id)
            .then((data) => {
                response.send(data);
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (err) {
        console.log(err)
    }
}

const getAll = async (request, response) => {
    UserModel.findAll()
        .then((data) => {
            response.send(data);
        })
        .catch((error) => {
            console.log(error)
        })
}


module.exports = {
    userUpdate,
    userDelete,
    getUserById,
    getAll
};
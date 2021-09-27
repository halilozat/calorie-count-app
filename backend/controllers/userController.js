const UserModel = require("../models/User");
const CryptoJS = require("crypto-js");


const userUpdate = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try {
            const updatedUser = await UserModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.code(200).send(updatedUser);
        } catch (err) {
            res.code(500).send(err);
        }
    } else {
        res.code(403).send("You can update only your account!");
    }
}

const userDelete = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await UserModel.findByIdAndDelete(req.params.id);
            res.code(200).send("User has been deleted...");
        } catch (err) {
            res.code(500).send(err);
        }
    } else {
        res.code(403).send("You can delete only your account!");
    }
}

const getUserById = async (req, res) => {
    try {
        UserModel.findById(req.params.id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (err) {
        console.log(err)
    }
}

const getAll = async (req, res) => {
    UserModel.findAll()
        .then((data) => {
            res.send(data);
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
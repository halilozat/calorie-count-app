const UserModel = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    const newUser = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
        ).toString(),
        userProtein: req.body.userProtein,
        userCarb: req.body.userCarb,
        userFat: req.body.userFat
    });
    try {
        const user = await newUser.save();
        res.code(201).send(user);
    } catch (err) {
        res.code(500).send(err);
    }
}

const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ where: { email: req.body.email } });
        !user && res.code(401).send("User not found!");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password &&
            res.code(401).send("Wrong password or username!");

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
        );

        res.code(200).send({ user, accessToken });
    } catch (err) {
        res.code(500).send(err);
    }
}


module.exports = {
    register,
    login
}
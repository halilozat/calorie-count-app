const UserModel = require("../../models/UserModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


const register = async (request, response) => {
    const newUser = new UserModel({
        username: request.body.username,
        email: request.body.email,
        password: CryptoJS.AES.encrypt(
            request.body.password,
            process.env.SECRET_KEY
        ).toString(),
        userProtein: request.body.userProtein,
        userCarb: request.body.userCarb,
        userFat: request.body.userFat
    });
    try {
        const user = await newUser.save();
        response.code(201).send(user);
    } catch (err) {
        response.code(500).send(err);
    }
}

const login = async (request, response) => {
    try {
        const user = await UserModel.findOne({ where: { email: request.body.email } });
        !user && response.code(401).send("User not found!");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== request.body.password &&
            response.code(401).send("Wrong password or username!");

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
        );

        response.code(200).send({ user, accessToken });
    } catch (err) {
        response.code(500).send(err);
    }
}


module.exports = {
    register,
    login
}
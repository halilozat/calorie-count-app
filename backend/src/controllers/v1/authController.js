const UserModel = require("../../models/UserModel");
const tokenModel = require("../../models/TokenModel");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

const register = async (request, response) => {
    const { email, password, confirmPassword, username } = request.body

    const userExists = await UserModel.findOne({ where: { email } });
    if (userExists) {
        return response.code(400).send({ message: "user not exist" })
    }
    if (password !== confirmPassword) {
        return response.code(400).send({ message: "password error" })
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
    });

    const accessToken = jwt.sign(
        { id: newUser.userRefId, isAdmin: newUser.isAdmin },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "5d" }
    );

    const refreshToken = jwt.sign(
        { email: newUser.email, id: newUser.userRefId },
        process.env.REFRESH_TOKEN_SECRET
    )
    console.log(newUser)

    await tokenModel.create({
        userId: newUser.userRefId,
        refreshToken: refreshToken,
    })

    try {
        const user = await newUser.save();
        response.code(201).send({ user, accessToken });
    } catch (error) {
        response.code(500).send(error);
    }
}

const login = async (request, response) => {
    try {
        const { email, password } = request.body

        const user = await UserModel.findOne({ where: { email } });

        !user && response.code(404).send("User not found!");

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        console.log("isPasswordCorrect : " + isPasswordCorrect)

        if (!isPasswordCorrect) {
            response.code(404).send("Wrong password");
        }


        const accessToken = jwt.sign(
            { id: user.userRefId, isAdmin: user.isAdmin },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "5d" }
        );

        const refreshToken = jwt.sign(
            { email: user.email, id: user.userRefId },
            process.env.REFRESH_TOKEN_SECRET
        )
        const token = await tokenModel.findOne({ where: { userId: user.userRefId } })
        token.update({ refreshToken: null }, { new: true })

        response.code(200).send({ user, accessToken })
    } catch (error) {
        response.code(500).send(error)
    }
}

const logout = async (request, response) => {

    try {
        const { id } = request.params

        const token = await tokenModel.findOne({ where: { userId: id } })
        token.update({ refreshToken: null }, { new: true })

        response.code(200).send({ message: "Logout succesfull" })
    } catch (error) {

        response.code(500).send(error)

    }

}

module.exports = {
    register,
    login,
    logout
}
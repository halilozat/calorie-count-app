const UserModel = require("../../models/UserModel");
const tokenModel = require("../../models/TokenModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const register = async (request, response) => {
    // const refreshToken = jwt.sign(
    //     { email: user.email, id: user.id },
    //     process.env.REFRESH_TOKEN_SECRET
    // )

    // await new tokenModel({ userId: user.id, refreshToken })
    // try {
    //     const user = await newUser.save();
    //     response.code(201).send({ user, accessToken });
    // } catch (err) {
    //     response.code(500).send(err);
    // }

    const { email, password, confirmPassword, username } = request.body

    const userExists = await UserModel.findOne({ where: { email } });
    if (userExists) {
        return response.code(400).send({ message: "user not exist" })
    }
    if (password !== confirmPassword) {
        return response.code(400).send({ message: "password error" })
    }
    const hashedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.SECRET_KEY
    ).toString()

    const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
    });

    const accessToken = jwt.sign(
        { email: newUser.email, id: newUser.userRefId },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '3m',
        }
    )

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
const UserModel = require("../../../models/UserModel");
const tokenModel = require("../../../models/TokenModel");
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
        { expiresIn: "300d" }
    );

    await tokenModel.create({
        userId: newUser.userRefId,
        refreshToken: refreshToken,
    })

    try {
        const user = await newUser.save();
        response.code(201).setCookie('jwt', accessToken, {
            domain: 'calorie-count.app',
            path: '/'
        }).send({ user, accessToken });
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
            { id: user.userRefId },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "300d" }
        );


        const token = await tokenModel.findOne({ where: { userId: user.userRefId } })
        token.update({ refreshToken: null }, { new: true })


        response.code(200).setCookie('jwt', accessToken, {
            domain: 'calorie-count.app',
            path: '/'
        }).send({ user, accessToken })
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

const refreshToken = async (req, res) => {
    try {
        const { id } = req.params
        const { refreshToken } = await tokenModel.findOne({ userId: id })
        if (!refreshToken) return res.code(401)

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, token) => {
            if (err) return res.code(403).send(err)

            const accessToken = jwt.sign(
                { email: token.email, id: token.id },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '3m' }
            )

            res.code(200).send(accessToken)
        })
    } catch (error) {
        console.log(error.message)
    }
}

const me = async (req, res, next) => {
    const authorizationToken = req.headers["authorization"];

    if (!authorizationToken) {
        return response.code(400).send({ message: "authorization error" })
    }

    jwt.verify(authorizationToken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
            return response.code(400).send({ message: "verify error" })
        }
        req.payload = payload;
    })

    const { userRefId } = req.payload
    try {
        const user = UserModel.findOne(userRefId)
        user.then(function (result) {
            res.send(result)
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    register,
    login,
    logout,
    refreshToken,
    me
}
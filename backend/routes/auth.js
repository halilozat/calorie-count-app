const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = function (fastify, opts, done) {
    //REGISTER
    fastify.post("/register", async (req, res) => {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString(),
        });
        try {
            const user = await newUser.save();
            res.code(201).send(user);
        } catch (err) {
            res.code(500).send(err);
        }
    });

    //LOGIN
    fastify.post("/login", async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                res.code(401).send("User not found!");
                return;
            }

            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            if (originalPassword !== req.body.password) {
                res.code(401).send("Wrong password or username!");
                return;
            }

            const accessToken = jwt.sign(
                { id: user.id, isAdmin: user.isAdmin },
                process.env.SECRET_KEY,
                { expiresIn: "5d" }
            );

            res.code(200).send({ user, accessToken });
        } catch (err) {
            res.code(500).send(err);
        }
    });
    done();
}
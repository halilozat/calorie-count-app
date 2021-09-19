const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

module.exports = function (fastify, opts, done) {
    fastify.put("/:id", verify, async (req, res) => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            if (req.body.password) {
                req.body.password = CryptoJS.AES.encrypt(
                    req.body.password,
                    process.env.SECRET_KEY
                ).toString();
            }

            try {
                const updatedUser = await User.findByIdAndUpdate(
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
    });


    //DELETE
    fastify.delete("/:id", async (req, res) => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            try {
                await User.findByIdAndDelete(req.params.id);
                res.code(200).send("User has been deleted...");
            } catch (err) {
                res.code(500).send(err);
            }
        } else {
            res.code(403).send("You can delete only your account!");
        }
    });

    //GET

    fastify.get("/:id", async (req, res) => {
        try {
            User.findById(req.params.id)
                .then((data) => {
                    res.send(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (err) {
            console.log(err)
        }
    });

    //GET ALL
    fastify.get("/", verify, async (req, res) => {
        User.findAll()
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error)
            })
    });

    done();
}
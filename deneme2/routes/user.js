const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");


//UPDATE

router.put("/:id", verify, async (req, res) => {
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
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can update only your account!");
    }
});


//DELETE
router.delete("/:id", async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can delete only your account!");
    }
});

//GET

router.get("/:id", async (req, res) => {
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
router.get("/", verify, async (req, res) => {
    User.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error)
        })
});





module.exports = router;

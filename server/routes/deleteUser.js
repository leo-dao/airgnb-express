const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Ad = require('../models/Ad');
const ErrorResponse = require('../utils/errorResponse');

router.post("/", async (req, res, next) => {

    //const { email, password } = req.body;

    try {
        // Finding user
        const user = req.body;

        await Ad.find({
            user: user
        }).then(function (ads) {

            Ad.deleteMany({ user: user }).then(function () {
                console.log("Data deleted");
            }).catch(function (err) {
                return next(new ErrorResponse(err), 404);
            });
        });

        await User.deleteOne({ _id: user._id });

        res.status(202).json({ success: true })

    } catch (err) {
        next(err)
    };
});

module.exports = router;